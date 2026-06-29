use eposnext;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com',
);


INSERT INTO Roles
(
    Name,
    Description,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
(
    'IT Admin',
    'Global system administrator',
    @EricUserId,
    @EricUserId,
    1,
    0
),
(
    'District Manager',
    'Multi-location manager',
    @EricUserId,
    @EricUserId,
    1,
    0
),
(
    'Manager',
    'Single location manager',
    @EricUserId,
    @EricUserId,
    1,
    0
),
(
    'Cashier',
    'Cashier role',
    @EricUserId,
    @EricUserId,
    1,
    0
);