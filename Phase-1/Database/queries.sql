USE sports_club_management;

SHOW TABLES;

DESCRIBE Members;

DESCRIBE SportsClubs;

DESCRIBE Rosters;

SELECT * FROM Members;

SELECT * FROM SportsClubs;

SELECT * FROM Rosters;

SELECT
    Members.name,
    SportsClubs.club_name,
    Rosters.join_date
FROM Rosters
JOIN Members
ON Rosters.member_id = Members.member_id
JOIN SportsClubs
ON Rosters.club_id = SportsClubs.club_id;