const db = require("../config/db");

// Get all sports clubs
const getAllClubs = async () => {
    const [rows] = await db.query(
        "SELECT * FROM SportsClubs"
    );

    return rows;
};

// Get club by ID
const getClubById = async (clubId) => {
    const [rows] = await db.query(
        "SELECT * FROM SportsClubs WHERE club_id = ?",
        [clubId]
    );

    return rows[0];
};

// Count members currently enrolled in a club
const getClubMemberCount = async (clubId) => {
    const [rows] = await db.query(
        "SELECT COUNT(*) AS totalMembers FROM Rosters WHERE club_id = ?",
        [clubId]
    );

    return rows[0].totalMembers;
};

// Check whether a member is already enrolled
const checkExistingEnrollment = async (memberId, clubId) => {
    const [rows] = await db.query(
        "SELECT * FROM Rosters WHERE member_id = ? AND club_id = ?",
        [memberId, clubId]
    );

    return rows[0];
};

// Enroll member
const enrollMember = async (memberId, clubId) => {
    await db.query(
        "INSERT INTO Rosters (member_id, club_id) VALUES (?, ?)",
        [memberId, clubId]
    );
};

// Leave club
const leaveClub = async (memberId, clubId) => {
    await db.query(
        "DELETE FROM Rosters WHERE member_id = ? AND club_id = ?",
        [memberId, clubId]
    );
};

module.exports = {
    getAllClubs,
    getClubById,
    getClubMemberCount,
    checkExistingEnrollment,
    enrollMember,
    leaveClub
};