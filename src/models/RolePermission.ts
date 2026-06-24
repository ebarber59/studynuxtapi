// src/models/RolePermission.ts

export interface RolePermission {
  roleId: number;

  permissionId: number;

  isActive: boolean;

  createdDate: Date;
  createdBy?: number;

  updatedDate: Date;
  updatedBy?: number;
}
