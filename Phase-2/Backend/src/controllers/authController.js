const bcrypt = require("bcrypt");
const {
    findMemberByEmail,
    createMember,
} = require("../models/memberModel");
const { generateToken } = require("../utils/jwt");

/**
 * Register a new member
 */
async function register(req, res) {
    try {
        const { name, email, password, membership_type } = req.body;

        // Basic validation
        if (!name || !email || !password || !membership_type) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        // Check if email already exists
        const existingMember = await findMemberByEmail(email);

        if (existingMember) {
            return res.status(409).json({
                message: "Email is already registered.",
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Save member
        await createMember(
            name,
            email,
            passwordHash,
            membership_type
        );

        return res.status(201).json({
            message: "Member registered successfully.",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error.",
        });
    }
}
/**
 * Login an existing member
 */
async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required.",
            });
        }

        // Find member by email
        const member = await findMemberByEmail(email);

        if (!member) {
            return res.status(401).json({
                message: "Invalid email or password.",
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            member.password_hash
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password.",
            });
        }

        // Generate JWT
        const token = generateToken(member);

        return res.status(200).json({
            message: "Login successful.",
            token,
            user: {
                member_id: member.member_id,
                name: member.name,
                email: member.email,
                membership_type: member.membership_type,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error.",
        });
    }
}
module.exports = {
    register,
    login,
};