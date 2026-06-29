import { Router } from "express";

import * as locationController from "../controllers/locations.controller";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.get(
  "/",
  authenticate,
  // authorize("locations.view"),
  locationController.getAll,
);

router.get(
  "/:id",
  authenticate,
  // authorize("locations.view"),
  locationController.getById,
);

router.post(
  "/",
  authenticate,
  // authorize("locations.manage"),
  locationController.create,
);

router.put(
  "/:id",
  authenticate,
  // authorize("locations.manage"),
  locationController.update,
);

router.delete(
  "/:id",
  authenticate,
  // authorize("locations.manage"),
  locationController.remove,
);

export default router;
