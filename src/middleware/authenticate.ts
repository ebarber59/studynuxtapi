import { NextFunction, Request, Response } from "express";
import jwt, { JwtHeader, SigningKeyCallback } from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { authConfig } from "../config/auth-config";
import type { CurrentUser } from "../models/CurrentUser";
import * as usersService from "../services/users.service";

const tenantId = process.env.ENTRA_TENANT_ID;
const expectedAudience = process.env.ENTRA_API_AUDIENCE;
const requiredScope = process.env.ENTRA_REQUIRED_SCOPE ?? "access_as_user";

if (!tenantId) {
  throw new Error("Missing ENTRA_TENANT_ID");
}

if (!expectedAudience) {
  throw new Error("Missing ENTRA_API_AUDIENCE");
}

const expectedIssuer = `https://sts.windows.net/${authConfig.tenantId}/`;

const client = jwksClient({
  jwksUri: `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`,
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
});

function getSigningKey(header: JwtHeader, callback: SigningKeyCallback) {
  if (!header.kid) {
    return callback(new Error("Token header missing kid"));
  }

  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      return callback(err);
    }

    const signingKey = key?.getPublicKey();

    if (!signingKey) {
      return callback(new Error("Unable to resolve signing key"));
    }

    callback(null, signingKey);
  });
}

function verifyJwt(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const decoded = jwt.decode(token, {
      complete: true,
    }) as any;

    jwt.verify(
      token,
      getSigningKey,
      {
        algorithms: ["RS256"],
        audience: expectedAudience,
        issuer: expectedIssuer,
      },
      (err, decoded) => {
        if (err) {
          return reject(err);
        }

        resolve(decoded);
      },
    );
  });
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Missing bearer token",
      });
    }

    const token = authHeader.substring("Bearer ".length);
    const claims = await verifyJwt(token);
    const scopes = typeof claims.scp === "string" ? claims.scp.split(" ") : [];

    if (!scopes.includes(requiredScope)) {
      return res.status(403).json({
        error: "Insufficient scope",
        requiredScope,
      });
    }

    if (!claims.oid) {
      return res.status(401).json({
        error: "Missing Entra Object Id",
      });
    }

    console.log("OID from token:", claims.oid);
    const currentUser: CurrentUser | null = await usersService.buildCurrentUser(
      claims.oid,
    );

    if (!currentUser) {
      return res.status(403).json({
        error: "User not provisioned",
      });
    }

    req.currentUser = currentUser;
    next();
  } catch (error: any) {
    console.error("[auth] token validation failed:", error);

    return res.status(401).json({
      error: "Invalid or expired token",
    });
  }
}
