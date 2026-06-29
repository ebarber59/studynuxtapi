import { pool } from "../database/mysql";
import { Location } from "../models/Location";
import {
  CreateLocationRequest,
  UpdateLocationRequest,
} from "../requests/locationRequests";

function mapLocation(row: any): Location {
  return {
    id: row.Id,
    code: row.Code,
    name: row.Name,

    isActive: Buffer.isBuffer(row.IsActive)
      ? row.IsActive[0] === 1
      : !!row.IsActive,
    isDeleted: Buffer.isBuffer(row.IsDeleted)
      ? row.IsDeleted[0] === 1
      : !!row.IsDeleted,
    createdDate: row.CreatedDate,
    createdBy: row.CreatedBy,

    updatedDate: row.UpdatedDate,
    updatedBy: row.UpdatedBy,
  };
}

export async function getAll(): Promise<Location[]> {
  const [rows] = await pool.query(`
    SELECT
        Id,
        Code,
        Name,
        IsActive,
        CreatedDate,
        CreatedBy,
        UpdatedDate,
        UpdatedBy
    FROM Locations
    WHERE IsDeleted = 0
    ORDER BY Name
  `);

  return (rows as any[]).map(mapLocation);
}

export async function getById(id: number): Promise<Location | null> {
  const [rows] = await pool.query(
    `
    SELECT
        Id,
        Code,
        Name,
        IsActive,
        CreatedDate,
        CreatedBy,
        UpdatedDate,
        UpdatedBy
    FROM Locations
    WHERE Id = ?
      AND IsDeleted = 0
    `,
    [id],
  );

  const locations = rows as any[];

  return locations.length > 0 ? mapLocation(locations[0]) : null;
}

export async function create(
  location: CreateLocationRequest,
  currentUserId: number,
): Promise<number> {
  const [result] = await pool.query(
    `
    INSERT INTO Locations
    (
        Code,
        Name,
        IsActive,
        CreatedDate,
        CreatedBy,
        UpdatedDate,
        UpdatedBy
    )
    VALUES
    (
        ?,
        ?,
        ?,
        NOW(),
        ?,
        NOW(),
        ?
    )
    `,
    [
      location.code,
      location.name,
      location.isActive ?? true,
      currentUserId,
      currentUserId,
    ],
  );

  return (result as any).insertId;
}

export async function update(
  id: number,
  location: UpdateLocationRequest,
  currentUserId: number,
): Promise<void> {
  await pool.query(
    `
    UPDATE Locations
    SET
        Code = ?,
        Name = ?,
        IsActive = ?,
        UpdatedDate = NOW(),
        UpdatedBy = ?
    WHERE Id = ?
      AND IsDeleted = 0
    `,
    [location.code, location.name, location.isActive, currentUserId, id],
  );
}

export async function remove(id: number, currentUserId: number): Promise<void> {
  await pool.query(
    `
    UPDATE Locations
    SET
        IsActive = 0,
        IsDeleted = 1,
        UpdatedDate = NOW(),
        UpdatedBy = ?
    WHERE Id = ?
    `,
    [currentUserId, id],
  );
}
