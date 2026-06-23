USE apptemplate;

INSERT INTO Users
(
    AuthProvider,
    EntraObjectId,
    Email,
    DisplayName,
    CreatedBy,
    UpdatedBy
)
VALUES
(
    'entra',
    '74a909fd-b00c-4f8f-a473-c2cecf25c211',
    'ebarber@spearmintrhino.com',
    'Eric Barber',
    null,
    null
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
    UpdatedBy
)
VALUES
(
    'entra',
    NULL,
    'shawn@example.com',
    'Shawn',
    @EricUserId,
    @EricUserId
);

INSERT INTO Users
(
    AuthProvider,
    Username,
    Email,
    DisplayName,
    CreatedBy,
    UpdatedBy
)
VALUES
(
    'local',
    'jane',
    'jane@club.local',
    'Jane',
    @EricUserId,
    @EricUserId
);