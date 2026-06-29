import { Router } from "express";

import { getLocations } from "../controllers/locations.controller";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.get("/", authenticate, getLocations);

export default router;
