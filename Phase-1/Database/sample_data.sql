USE sports_club_management;

INSERT INTO Members (name,email,password_hash,membership_type)
VALUES
('Ali Khan','ali@gmail.com','hashed_password_1','Student'),
('Sara Ahmed','sara@gmail.com','hashed_password_2','Student'),
('Admin User','admin@gmail.com','hashed_password_3','Admin');

INSERT INTO SportsClubs (club_name,coach_name,max_capacity)
VALUES
('Football Club','Coach Ahmed',20),
('Cricket Club','Coach Bilal',18),
('Basketball Club','Coach Umar',15);

INSERT INTO Rosters (member_id,club_id,join_date)
VALUES
(1,1,CURDATE()),
(2,2,CURDATE());