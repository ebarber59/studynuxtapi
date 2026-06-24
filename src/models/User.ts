// src/models/User.ts

export interface User {
  id: number;

  authProvider: "entra" | "local";

  entraObjectId?: string;

  username?: string;

  email: string;

  displayName: string;

  isActive: boolean;

  createdDate?: Date;

  updatedDate?: Date;

  createdBy?: number | null;

  updatedBy?: number | null;
}
