import cors from "cors";
import express from "express";
const expectedTenantId = "1da37cac-374a-4881-acf6-045b3705aa25";
const expectedAudience = "api://9c4fa4d5-c9f7-4859-b7a6-d485c3adb5d6";

const expectedIssuers = [
  `https://login.microsoftonline.com/${expectedTenantId}/v2.0`,
  `https://sts.windows.net/${expectedTenantId}/`,
];

const app = express();
app.use(express.json());
//@ts-ignore
app.use(cors());

function decodeToken(token: string) {
  try {
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString(),
    );
    return payload;
  } catch {
    return null;
  }
}

function validateToken(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing token" });
  }

  const token = authHeader.split(" ")[1];
  const payload = decodeToken(token);

  if (!payload) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  console.log("Decoded payload:", payload);

  // ✅ Check tenant
  if (payload.tid !== expectedTenantId) {
    return res.status(401).json({ error: "Invalid tenant" });
  }

  // ✅ Check issuer

  if (!expectedIssuers.includes(payload.iss)) {
    return res.status(401).json({ error: "Invalid issuer" });
  }

  // ✅ Check expiration
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp < now) {
    return res.status(401).json({ error: "Token expired" });
  }

  // ✅ Check audience (this will likely FAIL right now)
  if (payload.aud !== expectedAudience) {
    console.log("⚠️ Audience mismatch:", payload.aud);
    return res.status(401).json({ error: "Invalid audience" });
  }

  // ✅ attach user info
  req.user = payload;

  next();
}

app.get("/api/test", validateToken, (req, res) => {
  console.log("✅ /api/test hit");

  const authHeader = req.headers.authorization;
  console.log("Authorization:", authHeader);

  res.json({
    message: "API is working ✅",
  });
});

app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});
