USE apptemplate;

CREATE TABLE RolePermissions (
    RoleId INT NOT NULL,

    PermissionId INT NOT NULL,

      CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CreatedBy INT NULL,

    UpdatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    UpdatedBy INT NULL,

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