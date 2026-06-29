use eposnext;
CREATE TABLE Locations (
    Id INT AUTO_INCREMENT PRIMARY KEY,

    Code VARCHAR(20) NOT NULL,

    Name VARCHAR(100) NOT NULL,

    IsActive    BIT NOT NULL DEFAULT 1,
    IsDeleted   BIT NOT NULL DEFAULT 0,

    CreatedDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CreatedBy   INT NULL,

    UpdatedDate DATETIME NULL,
    UpdatedBy   INT NULL
);

CREATE UNIQUE INDEX UX_Locations_Code
ON Locations (Code);