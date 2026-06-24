// src/repositories/users.repository.ts

import { pool } from "../database/mysql";
import { User } from "../models/User";

export async function findById(id: number): Promise<User | null> {
  const [rows] = await pool.query<any[]>(
    `
    SELECT
      Id,
      AuthProvider,
      EntraObjectId,
      Username,
      Email,
      DisplayName,
      IsActive,    
      CreatedDate,
      CreatedBy,
      UpdatedDate,
      UpdatedBy
    FROM Users
    WHERE Id = ?
    `,
    [id],
  );

  if (rows.length === 0) {
    return null;
  }
  const user = mapUser(rows[0]);
  return user;
}

export async function findByEmail(email: string): Promise<User | null> {
  const [rows] = await pool.query<any[]>(
    `
    SELECT
      Id,
      AuthProvider,
      EntraObjectId,
      Username,
      Email,
      DisplayName,
      IsActive,    
      CreatedDate,
      CreatedBy,
      UpdatedDate,
      UpdatedBy
    FROM Users
    WHERE Email = ?
    `,
    [email],
  );

  if (rows.length === 0) {
    return null;
  }

  return mapUser(rows[0]);
}

export async function findByEntraObjectId(
  entraObjectId: string,
): Promise<User | null> {
  const [rows] = await pool.query<any[]>(
    `
    SELECT
      Id,
      AuthProvider,
      EntraObjectId,
      Username,
      Email,
      DisplayName,
      IsActive,    
      CreatedDate,
      CreatedBy,
      UpdatedDate,
      UpdatedBy
    FROM Users
    WHERE EntraObjectId = ?
    `,
    [entraObjectId],
  );

  if (rows.length === 0) {
    return null;
  }

  const user = mapUser(rows[0]);
  return user;
}

function mapUser(row: any): User {
  return {
    id: row.Id,

    authProvider: row.AuthProvider,

    entraObjectId: row.EntraObjectId ?? undefined,

    username: row.Username ?? undefined,

    email: row.Email,

    displayName: row.DisplayName,

    isActive: bitToBoolean(row.IsActive),

    createdDate: row.CreatedDate,

    createdBy: row.CreatedBy ?? undefined,

    updatedDate: row.UpdatedDate,

    updatedBy: row.UpdatedBy ?? undefined,
  };
}

function bitToBoolean(value: any): boolean {
  if (Buffer.isBuffer(value)) {
    return value[0] === 1;
  }

  return value === 1 || value === true;
}
