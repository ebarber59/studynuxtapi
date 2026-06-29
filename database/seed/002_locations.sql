use eposnext;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com',
);
    

INSERT INTO Locations
(
    Code,
    Name,
    CreatedBy,
    UpdatedBy,
    IsActive,
    IsDeleted
)
VALUES
('ALL', 'All Locations', @EricUserId, @EricUserId, 1, 0),
('ANA', 'California Girls - Anaheim', @EricUserId, @EricUserId, 1, 0),
('COI', 'City of Industry', @EricUserId, @EricUserId, 1, 0),
('DAL', 'Dallas', @EricUserId, @EricUserId, 1, 0),
('DAL2', 'Dallas II', @EricUserId, @EricUserId, 1, 0),
('DNGLA', 'Dames N Games - Los Angeles', @EricUserId, @EricUserId, 1, 0),
('DNGGR', 'Dames N Games - Grand Rapids', @EricUserId, @EricUserId, 1, 0),
('LEX', 'Lexington', @EricUserId, @EricUserId, 1, 0),
('OLY', 'Los Angeles', @EricUserId, @EricUserId, 1, 0),
('OX', 'Oxnard', @EricUserId, @EricUserId, 1, 0),
('RI', 'Rialto', @EricUserId, @EricUserId, 1, 0),
('RIV', 'Riverside', @EricUserId, @EricUserId, 1, 0),
('SA', 'Santa Ana', @EricUserId, @EricUserId, 1, 0),
('SB', 'Santa Barbara', @EricUserId, @EricUserId, 1, 0),
('SM', 'Santa Maria', @EricUserId, @EricUserId, 1, 0),
('SMGC', 'Boise', @EricUserId, @EricUserId, 1, 0),
('TOR', 'Torrance', @EricUserId, @EricUserId, 1, 0),
('WCV', 'Carter Lake - WCV', @EricUserId, @EricUserId, 1, 0),
('WPB', 'West Palm Beach', @EricUserId, @EricUserId, 1, 0),
('MN', 'Minneapolis', @EricUserId, @EricUserId, 1, 0),
('PITT', 'Pittsburgh', @EricUserId, @EricUserId, 1, 0),
('SJ', 'San Jose', @EricUserId, @EricUserId, 1, 0);