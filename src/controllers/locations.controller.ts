import { Request, Response } from "express";

import * as locationsService from "../services/locations.service";

export async function getLocations(req: Request, res: Response) {
  try {
    const locations = await locationsService.getLocations();

    return res.status(200).json(locations);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to retrieve locations",
    });
  }
}
