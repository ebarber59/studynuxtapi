// src/services/users.service.ts

import { CurrentUser } from "../models/CurrentUser";
import { User } from "../models/User";
import * as securityRepository from "../repositories/security.repository";
import * as usersRepository from "../repositories/users.repository";

export async function buildCurrentUser(
  entraObjectId: string,
): Promise<CurrentUser | null> {
  const user = await usersRepository.findByEntraObjectId(entraObjectId);

  if (!user) {
    return null;
  }

  const assignments = await securityRepository.getUserAssignments(user.id);
  const permissions = await securityRepository.getUserPermissions(user.id);

  const currentUser: CurrentUser = {
    userId: user.id,

    authProvider: user.authProvider,

    entraObjectId: user.entraObjectId,

    username: user.username,

    email: user.email,

    displayName: user.displayName,

    isActive: user.isActive,

    assignments,

    permissions,
  };

  console.log("CurrentUser:", currentUser);

  return currentUser;
}
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
