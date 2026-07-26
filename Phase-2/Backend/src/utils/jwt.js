const jwt = require("jsonwebtoken");

function generateToken(member) {
    return jwt.sign(
        {
            member_id: member.member_id,
            email: member.email,
            membership_type: member.membership_type,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
}

module.exports = {
    generateToken,
};