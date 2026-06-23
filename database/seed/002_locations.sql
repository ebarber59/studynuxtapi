USE apptemplate;

SET @EricUserId =
(
    SELECT Id
    FROM Users
    WHERE Email = 'ebarber@spearmintrho.com'
);
    

INSERT INTO Locations
(
    Code,
    Name,
    CreatedBy,
    UpdatedBy
)
VALUES
('ALL', 'All Locations', @EricUserId, @EricUserId),
('ANA', 'California Girls - Anaheim', @EricUserId, @EricUserId),
('COI', 'City of Industry', @EricUserId, @EricUserId),
('DAL', 'Dallas', @EricUserId, @EricUserId),
('DAL2', 'Dallas II', @EricUserId, @EricUserId),
('DNGLA', 'Dames N Games - Los Angeles', @EricUserId, @EricUserId),
('DNGGR', 'Dames N Games - Grand Rapids', @EricUserId, @EricUserId),
('LEX', 'Lexington', @EricUserId, @EricUserId),
('OLY', 'Los Angeles', @EricUserId, @EricUserId),
('OX', 'Oxnard', @EricUserId, @EricUserId),
('RI', 'Rialto', @EricUserId, @EricUserId),
('SA', 'Santa Ana', @EricUserId, @EricUserId),
('SB', 'Santa Barbara', @EricUserId, @EricUserId),
('SM', 'Santa Maria', @EricUserId, @EricUserId),
('SMGC', 'Boise', @EricUserId, @EricUserId),
('TOR', 'Torrance', @EricUserId, @EricUserId),
('WCV', 'Carter Lake - WCV', @EricUserId, @EricUserId),
('WPB', 'West Palm Beach', @EricUserId, @EricUserId),
('MN', 'Minneapolis', @EricUserId, @EricUserId),
('PITT', 'Pittsburgh', @EricUserId, @EricUserId),
('SJ', 'San Jose', @EricUserId, @EricUserId);