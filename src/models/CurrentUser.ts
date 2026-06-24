// src/models/CurrentUser.ts

import { UserAssignment } from "./UserAssignment";

export interface CurrentUser {
  userId: number;

  authProvider: "entra" | "local";

  entraObjectId?: string;

  username?: string;

  email: string;

  displayName: string;

  isActive: boolean;

  assignments: UserAssignment[];

  permissions: string[];
}
