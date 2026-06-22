// src/bootstrap.ts

import dotenv from "dotenv";

dotenv.config();

console.log("[bootstrap] TENANT:", process.env.ENTRA_TENANT_ID);
