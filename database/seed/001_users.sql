USE apptemplate;

INSERT INTO Users
(
    AuthProvider,
    EntraObjectId,
    Email,
    DisplayName
)
VALUES
(
    'entra',
    '74a909fd-b00c-4f8f-a473-c2cecf25c211',
    'ebarber@spearmintrhino.com',
    'Eric Barber'
);

INSERT INTO Users
(
    AuthProvider,
    EntraObjectId,
    Email,
    DisplayName
)
VALUES
(
    'entra',
    NULL,
    'shawn@example.com',
    'Shawn'
);

INSERT INTO Users
(
    AuthProvider,
    Username,
    Email,
    DisplayName
)
VALUES
(
    'local',
    'jane',
    'jane@club.local',
    'Jane'
);