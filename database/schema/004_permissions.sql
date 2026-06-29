use eposnext;

CREATE TABLE Permissions (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    Name VARCHAR(100) NOT NULL,

    Description VARCHAR(500) NULL,

    IsActive    BIT NOT NULL DEFAULT 1,
    IsDeleted   BIT NOT NULL DEFAULT 0,

    CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CreatedBy   INT NULL,

    UpdatedDate DATETIME NULL,
    UpdatedBy   INT NULL
);

CREATE UNIQUE INDEX UX_Permissions_Name
ON Permissions (Name);