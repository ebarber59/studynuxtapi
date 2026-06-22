import { NextFunction, Request, Response } from "express";
import jwt, { JwtHeader, SigningKeyCallback } from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { CurrentUser } from "../types/currentUser";
import { authConfig } from "../config/auth-config";

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

    console.log("Issuer:", decoded?.payload?.iss);
    console.log("Audience:", decoded?.payload?.aud);
    console.log("Version:", decoded?.payload?.ver);
    console.log("Scope:", decoded?.payload?.scp);

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

    const currentUser: CurrentUser = {
      authProvider: "entra",

      entraObjectId: claims.oid,
      tenantId: claims.tid,

      email: claims.preferred_username ?? claims.upn ?? claims.email ?? "",

      name: claims.name ?? "",

      scopes,

      // These will eventually come from your app DB
      roles: [],
      permissions: [],
    };

    (req as any).user = currentUser;

    next();
  } catch (error: any) {
    console.error("[auth] token validation failed:", error);
    console.error(
      "[auth] token validation failed, error message:",
      error.message,
    );
    return res.status(401).json({
      error: "Invalid or expired token",
    });
  }
}
