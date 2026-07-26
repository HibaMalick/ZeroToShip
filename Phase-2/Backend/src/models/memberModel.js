const pool = require("../config/db");

/**
 * Find a member by email
 */
async function findMemberByEmail(email) {
    const [rows] = await pool.query(
        "SELECT * FROM Members WHERE email = ?",
        [email]
    );

    return rows[0];
}

/**
 * Create a new member
 */
async function createMember(name, email, passwordHash, membershipType) {
    const [result] = await pool.query(
        `INSERT INTO Members
        (name, email, password_hash, membership_type)
        VALUES (?, ?, ?, ?)`,
        [name, email, passwordHash, membershipType]
    );

    return result;
}

module.exports = {
    findMemberByEmail,
    createMember,
};