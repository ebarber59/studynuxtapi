use eposnext;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);


INSERT INTO Permissions
(
    Name,
    Description,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
('users.view', 'View users', @EricUserId, @EricUserId, 1, 0),
('users.manage', 'Manage users', @EricUserId, @EricUserId, 1, 0),

('roles.view', 'View roles', @EricUserId, @EricUserId, 1, 0),
('roles.manage', 'Manage roles', @EricUserId, @EricUserId, 1, 0),

('locations.view', 'View locations', @EricUserId, @EricUserId, 1, 0),
('locations.manage', 'Manage locations', @EricUserId, @EricUserId, 1, 0),

('permissions.view', 'View permissions', @EricUserId, @EricUserId, 1, 0),
('permissions.manage', 'Manage permissions', @EricUserId, @EricUserId, 1, 0),

('sales.view', 'View sales', @EricUserId, @EricUserId, 1, 0),
('sales.edit', 'Edit sales', @EricUserId, @EricUserId, 1, 0),

('inventory.view', 'View inventory', @EricUserId, @EricUserId, 1, 0),
('inventory.edit', 'Edit inventory', @EricUserId, @EricUserId, 1, 0), 

('reports.view', 'View reports', @EricUserId, @EricUserId, 1, 0),

('admin-dashboard.view', 'View Admin Dashboard', @EricUserId, @EricUserId, 1, 0),
('admin-dashboard.manage', 'Manage Admin Dashboard', @EricUserId, @EricUserId, 1, 0),

('manager-dashboard.view', 'View Admin Dashboard', @EricUserId, @EricUserId, 1, 0),
('manager-dashboard.manage', 'Manage Admin Dashboard', @EricUserId, @EricUserId, 1, 0);

('inventory.view', 'View inventory', @EricUserId, @EricUserId, 1, 0),
('inventory.edit', 'Edit inventory', @EricUserId, @EricUserId, 1, 0), 

('reports.view', 'View reports', @EricUserId, @EricUserId, 1, 0),

('admin-dashboard.view', 'View Admin Dashboard', @EricUserId, @EricUserId, 1, 0),
('admin-dashboard.manage', 'Manage Admin Dashboard', @EricUserId, @EricUserId, 1, 0),

('manager-dashboard.view', 'View Manager Dashboard', @EricUserId, @EricUserId,1, 0),
('manager-dashboard.manage', 'Manage Manager Dashboard', @EricUserId, @EricUserId, 1, 0);
