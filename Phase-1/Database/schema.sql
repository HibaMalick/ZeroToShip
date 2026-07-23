USE sports_club_management;

-- ==========================================
-- TABLE: Members
-- Stores all registered users of the system
-- ==========================================

CREATE TABLE Members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    membership_type ENUM('Student', 'Admin') NOT NULL
);

-- ==========================================
-- TABLE: SportsClubs
-- Stores sports club information
-- ==========================================

CREATE TABLE SportsClubs (
    club_id INT AUTO_INCREMENT PRIMARY KEY,
    club_name VARCHAR(100) NOT NULL,
    coach_name VARCHAR(100) NOT NULL,
    max_capacity INT NOT NULL CHECK (max_capacity > 0)
);

-- ==========================================
-- TABLE: Rosters
-- Maps members to sports clubs
-- ==========================================

CREATE TABLE Rosters (
    roster_id INT AUTO_INCREMENT PRIMARY KEY,

    member_id INT NOT NULL,
    club_id INT NOT NULL,

    join_date DATE NOT NULL DEFAULT (CURRENT_DATE),

    CONSTRAINT fk_member
        FOREIGN KEY (member_id)
        REFERENCES Members(member_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_club
        FOREIGN KEY (club_id)
        REFERENCES SportsClubs(club_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);