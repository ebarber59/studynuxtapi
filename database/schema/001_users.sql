use eposnext;

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    AuthProvider VARCHAR(20) NOT NULL,

    EntraObjectId VARCHAR(64) NULL,

    Username VARCHAR(100) NULL,

    Email VARCHAR(255) NOT NULL,

    DisplayName VARCHAR(255) NOT NULL,

    IsActive    BIT NOT NULL DEFAULT 1,
    IsDeleted   BIT NOT NULL DEFAULT 0,

    CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CreatedBy INT NULL,

    UpdatedDate DATETIME NULL,
    UpdatedBy   INT NULL
);

CREATE UNIQUE INDEX UX_Users_Email
ON Users (Email);

CREATE UNIQUE INDEX UX_Users_EntraObjectId
ON Users (EntraObjectId);