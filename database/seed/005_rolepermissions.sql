USE apptemplate;

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
    UpdatedBy
)
VALUES
('users.view', 'View users', @EricUserId, @EricUserId),
('users.manage', 'Manage users', @EricUserId, @EricUserId),

('locations.view', 'View locations', @EricUserId, @EricUserId),
('locations.manage', 'Manage locations', @EricUserId, @EricUserId),

('sales.view', 'View sales', @EricUserId, @EricUserId),
('sales.edit', 'Edit sales', @EricUserId, @EricUserId),

('inventory.view', 'View inventory', @EricUserId, @EricUserId),
('inventory.edit', 'Edit inventory', @EricUserId, @EricUserId), 

('reports.view', 'View reports',@EricUserId,@EricUserId);   