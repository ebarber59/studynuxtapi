import { Request, Response } from "express";
import * as usersService from "../services/users.service";

export async function getCurrentUser(req: Request, res: Response) {
  const user = await usersService.getCurrentUser(req.user!);

  res.json(user);
}

