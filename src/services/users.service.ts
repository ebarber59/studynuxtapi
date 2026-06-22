// users.service.ts

import { CurrentUser } from "../types/currentUser";

export async function getCurrentUser(user: CurrentUser) {
  return {
    appUserId: user.appUserId,
    authProvider: user.authProvider,
    email: user.email,
    name: user.name,
    roles: user.roles,
    permissions: user.permissions,
  };
}
