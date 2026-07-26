const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    try {
        // Read Authorization header
        const authHeader = req.headers.authorization;

        // Check if header exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Access denied. No token provided."
            });
        }

        // Expected format:
        // Authorization: Bearer <token>
        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Attach user to request
        req.user = decoded;

        // Continue to next middleware/controller
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token."
        });
    }
}

module.exports = authenticate;