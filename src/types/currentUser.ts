export type AuthProvider = "entra" | "local";

export interface CurrentUser {
  userId: number;

  authProvider: "entra" | "local";

  entraObjectId?: string;

  email: string;

  displayName: string;

  roles: string[];

  permissions: string[];

  locations: string[];
}
