USE apptemplate;

INSERT INTO Permissions
(
    Name,
    Description
)
VALUES
('users.view', 'View users'),
('users.manage', 'Manage users'),

('locations.view', 'View locations'),
('locations.manage', 'Manage locations'),

('sales.view', 'View sales'),
('sales.edit', 'Edit sales'),

('reports.view', 'View reports');