USE apptemplate;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);


INSERT INTO Roles
(
    Name,
    Description,
    CreatedBy,
    UpdatedBy
)
VALUES
(
    'IT Admin',
    'Global system administrator',
    @EricUserId,
    @EricUserId
),
(
    'District Manager',
    'Multi-location manager',
    @EricUserId,
    @EricUserId
),
(
    'Manager',
    'Single location manager',
    @EricUserId,
    @EricUserId
),
(
    'Cashier',
    'Cashier role',
    @EricUserId,
    @EricUserId
);