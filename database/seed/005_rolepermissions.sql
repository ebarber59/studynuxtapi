USE apptemplate;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);

-- IT Admin

INSERT INTO RolePermissions
(
    RoleId,
    PermissionId,
    CreatedBy,
    UpdatedBy
)
SELECT
    r.Id,
    p.Id,
    @EricUserId,
    @EricUserId
FROM Roles r
INNER JOIN Permissions p
WHERE r.Name = 'IT Admin'
AND p.Name IN
(
    'users.view',
    'users.manage',
    'locations.view',
    'locations.manage',
    'sales.view',
    'sales.edit',
    'inventory.view',
    'inventory.edit',
    'reports.view'
);

-- District Manager

INSERT INTO RolePermissions
(
    RoleId,
    PermissionId,
    CreatedBy,
    UpdatedBy
)
SELECT
    r.Id,
    p.Id,
    @EricUserId,
    @EricUserId
FROM Roles r
INNER JOIN Permissions p
WHERE r.Name = 'District Manager'
AND p.Name IN
(
    'locations.view',
    'sales.view',
    'sales.edit',
    'inventory.view',
    'inventory.edit',
    'reports.view'
);

-- Manager

INSERT INTO RolePermissions
(
    RoleId,
    PermissionId,
    CreatedBy,
    UpdatedBy
)
SELECT
    r.Id,
    p.Id,
    @EricUserId,
    @EricUserId
FROM Roles r
INNER JOIN Permissions p
WHERE r.Name = 'Manager'
AND p.Name IN
(
    'sales.view',
    'sales.edit',
    'inventory.view',
    'inventory.edit',
    'reports.view'
);

-- Cashier

INSERT INTO RolePermissions
(
    RoleId,
    PermissionId,
    CreatedBy,
    UpdatedBy
)
SELECT
    r.Id,
    p.Id,
    @EricUserId,
    @EricUserId
FROM Roles r
INNER JOIN Permissions p
WHERE r.Name = 'Cashier'
AND p.Name IN
(
    'sales.view'
);