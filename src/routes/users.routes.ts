// src/routes/users.routes.ts

import { Router } from "express";
import { getCurrentUser } from "../controllers/users.controller";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.get("/me", authenticate, getCurrentUser);
//router.get("/me", getCurrentUser);

export default router;
