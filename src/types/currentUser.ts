export type AuthProvider = "entra" | "local";

export interface CurrentUser {
  authProvider: AuthProvider;

  // Internal app identity
  appUserId?: string;

  // Entra identity
  entraObjectId?: string;
  tenantId?: string;

  email: string;
  name: string;

  scopes: string[];
  roles: string[];
  permissions: string[];
}
