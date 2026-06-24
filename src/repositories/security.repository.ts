// src/repositories/security.repository.ts

import { pool } from "../database/mysql";
import { UserAssignment } from "../models/UserAssignment";

export async function getUserAssignments(
  userId: number,
): Promise<UserAssignment[]> {
  const [rows] = await pool.query<any[]>(
    `
    SELECT
        l.Id     AS LocationId,
        l.Code   AS LocationCode,
        l.Name   AS LocationName,

        r.Id     AS RoleId,
        r.Name   AS RoleName

    FROM UserLocationRoles ulr

    INNER JOIN Locations l
        ON l.Id = ulr.LocationId

    INNER JOIN Roles r
        ON r.Id = ulr.RoleId

    WHERE ulr.UserId = ?
    `,
    [userId],
  );

  return rows.map(mapAssignment);
}

function mapAssignment(row: any): UserAssignment {
  return {
    locationId: row.LocationId,
    locationCode: row.LocationCode,
    locationName: row.LocationName,

    roleId: row.RoleId,
    roleName: row.RoleName,
  };
}

// src/repositories/security.repository.ts

export async function getUserPermissions(userId: number): Promise<string[]> {
  const [rows] = await pool.query<any[]>(
    `
    SELECT DISTINCT
        p.Name

    FROM UserLocationRoles ulr

    INNER JOIN RolePermissions rp
        ON rp.RoleId = ulr.RoleId

    INNER JOIN Permissions p
        ON p.Id = rp.PermissionId

    WHERE ulr.UserId = ?
      AND p.IsActive = 1
    `,
    [userId],
  );

  return rows.map((x) => x.Name);
}
