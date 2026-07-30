const express = require("express");
const router = express.Router();

const clubController = require("../controllers/clubController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all clubs
router.get(
    "/listings",
    authMiddleware,
    clubController.getClubListings
);

// Enroll in a club
router.post(
    "/enroll",
    authMiddleware,
    clubController.enrollClub
);

// Leave a club
router.delete(
    "/leave/:clubId",
    authMiddleware,
    clubController.leaveClub
);

module.exports = router;