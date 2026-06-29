import { pool } from "../database/mysql";
import { Location } from "../models/Location";

function mapLocation(row: any): Location {
  return {
    id: row.Id,
    code: row.Code,
    name: row.Name,

    isActive: Buffer.isBuffer(row.IsActive)
      ? row.IsActive[0] === 1
      : !!row.IsActive,

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
    ORDER BY Name
  `);

  return (rows as any[]).map(mapLocation);
}
