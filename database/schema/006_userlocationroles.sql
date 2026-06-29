use eposnext;

CREATE TABLE UserLocationRoles (
    UserId INT NOT NULL,

    LocationId INT NOT NULL,

    RoleId INT NOT NULL,

    IsActive    BIT NOT NULL DEFAULT 1,
    IsDeleted   BIT NOT NULL DEFAULT 0,

    CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CreatedBy   INT NULL,

    UpdatedDate DATETIME NULL,
    UpdatedBy   INT NULL,

    PRIMARY KEY (
        UserId,
        LocationId,
        RoleId
    ),

    CONSTRAINT FK_UserLocationRoles_Users
        FOREIGN KEY (UserId)
        REFERENCES Users(Id),

    CONSTRAINT FK_UserLocationRoles_Locations
        FOREIGN KEY (LocationId)
        REFERENCES Locations(Id),

    CONSTRAINT FK_UserLocationRoles_Roles
        FOREIGN KEY (RoleId)
        REFERENCES Roles(Id)
);