// src/app.ts

import cors from "cors";
import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:5173",
    ],
  }),
);
app.use(express.json());

app.use("/api/users", usersRoutes);

export default app;
