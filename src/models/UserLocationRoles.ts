// src/models/UserLocationRoles.ts

export interface UserLocationRoles {
  userId: number;

  locationId: number;

  roleId: number;

  createdDate: Date;
  createdBy?: number | null;

  updatedDate: Date;
  updatedBy?: number | null;
}
