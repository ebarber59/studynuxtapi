use eposnext;

CREATE TABLE RolePermissions (
    RoleId INT NOT NULL,

    PermissionId INT NOT NULL,

    IsActive    BIT NOT NULL DEFAULT 1,
    IsDeleted   BIT NOT NULL DEFAULT 0,

    CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CreatedBy   INT NULL,

    UpdatedDate DATETIME NULL,
    UpdatedBy   INT NULL,

    PRIMARY KEY (
        RoleId,
        PermissionId
    ),

    CONSTRAINT FK_RolePermissions_Roles
        FOREIGN KEY (RoleId)
        REFERENCES Roles(Id),

    CONSTRAINT FK_RolePermissions_Permissions
        FOREIGN KEY (PermissionId)
        REFERENCES Permissions(Id)
);