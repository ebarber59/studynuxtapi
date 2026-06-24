// src/models/Location.ts

export interface Location {
  id: number;

  code: string;

  name: string;

  isActive: boolean;

  createdDate: Date;
  createdBy?: number;

  updatedDate: Date;
  updatedBy?: number;
}
