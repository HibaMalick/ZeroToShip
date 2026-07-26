const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authMiddleware");
const requireAdmin = require("../middleware/roleMiddleware");

// Protected Admin Route
router.get(
    "/dashboard",
    authenticate,
    requireAdmin,
    (req, res) => {
        res.status(200).json({
            message: "Welcome to the Admin Dashboard!",
            admin: req.user,
        });
    }
);

module.exports = router;