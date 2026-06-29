import { Request, Response } from "express";

export async function getCurrentUser(req: Request, res: Response) {
  console.log("[users.controller] Current User:", req.user);
  return res.status(200).json(req.user);
}
