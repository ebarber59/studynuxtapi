import { Request, Response } from "express";
import * as locationService from "../services/locations.service";

export async function getAll(req: Request, res: Response) {
  const locations = await locationService.getAll();

  res.json(locations);
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id as string, 10);

  const location = await locationService.getById(id);

  res.json(location);
}

export async function create(req: Request, res: Response) {
  const id = await locationService.create(req.body, req.currentUser!.userId);

  res.status(201).json({ id });
}

export async function update(req: Request, res: Response) {
  const id = parseInt(req.params.id as string, 10);

  await locationService.update(id, req.body, req.currentUser!.userId);

  res.sendStatus(204);
}

export async function remove(req: Request, res: Response) {
  const id = parseInt(req.params.id as string, 10);

  await locationService.remove(id, req.currentUser!.userId);

  res.sendStatus(204);
}
