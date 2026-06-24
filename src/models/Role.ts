// src/models/Role.ts

export interface Role {
  id: number;

  name: string;

  description?: string;

  isActive: boolean;

  createdDate: Date;
  createdBy?: number;

  updatedDate: Date;
  updatedBy?: number;
}