use eposnext;

INSERT INTO Users
(
    AuthProvider,
    EntraObjectId,
    Email,
    DisplayName,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
(
    'entra',
    'a4796ac5-36f6-4b95-b6dc-9a9f1ddf7daf',
    'ebarber@spearmintrhino.com',
    'Eric Barber',
    null,
    null,
    1,
    0
);

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);

INSERT INTO Users
(
    AuthProvider,
    EntraObjectId,
    Email,
    DisplayName,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
(
    'entra',
    NULL,
    'shawn@example.com',
    'Shawn',
    @EricUserId,
    @EricUserId,
    1,
    0
);

INSERT INTO Users
(
    AuthProvider,
    Username,
    Email,
    DisplayName,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
(
    'local',
    'jane',
    'jane@club.local',
    'Jane',
    @EricUserId,
    @EricUserId,
    1,
    0
);