// src/services/users.service.ts

import { User } from "../models/User";
import * as usersRepository from "../repositories/users.repository";

export async function getCurrentUser(userId: number): Promise<User | null> {
  const user = await usersRepository.findById(userId);

  return user;
}

export async function getCurrentUserFromEntraObjectId(
  entraObjectId: string,
): Promise<User | null> {
  const user = await usersRepository.findByEntraObjectId(entraObjectId);

  return user;
}
