USE apptemplate;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);


-- Eric
INSERT INTO UserLocationRoles
(
    UserId,
    LocationId,
    RoleId,
    CreatedBy,
    UpdatedBy
)
VALUES
(
    1,
    1,
    1,
    @EricUserId,
    @EricUserId
);

-- Shawn
INSERT INTO UserLocationRoles
(
    UserId,
    LocationId,
    RoleId,
    CreatedBy,
    UpdatedBy
)
VALUES
(
    2,
    2,
    2,
    @EricUserId,
    @EricUserId    
),
(
    2,
    3,
    2,
    @EricUserId,
    @EricUserId    
);

-- Jane
INSERT INTO UserLocationRoles
(
    UserId,
    LocationId,
    RoleId,
    CreatedBy,
    UpdatedBy    
)
VALUES
(
    3,
    2,
    4,
    @EricUserId,
    @EricUserId    
);