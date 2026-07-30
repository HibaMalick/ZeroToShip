const clubModel = require("../models/clubModel");

// GET /api/clubs/listings
const getClubListings = async (req, res) => {
    try {
        const clubs = await clubModel.getAllClubs();

        res.status(200).json(clubs);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error."
        });
    }
};

// POST /api/clubs/enroll
const enrollClub = async (req, res) => {
    try {
        const memberId = req.user.member_id;
        const { club_id } = req.body;

        // Check whether club exists
        const club = await clubModel.getClubById(club_id);

        if (!club) {
            return res.status(404).json({
                message: "Club not found."
            });
        }

        // Prevent duplicate enrollment
        const alreadyEnrolled =
            await clubModel.checkExistingEnrollment(memberId, club_id);

        if (alreadyEnrolled) {
            return res.status(400).json({
                message: "Member is already enrolled in this club."
            });
        }

        // Check club capacity
        const currentMembers =
            await clubModel.getClubMemberCount(club_id);

        if (currentMembers >= club.max_capacity) {
            return res.status(400).json({
                message: "Club has reached its maximum capacity."
            });
        }

        await clubModel.enrollMember(memberId, club_id);

        res.status(201).json({
            message: "Enrollment successful."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error."
        });
    }
};

// DELETE /api/clubs/leave/:clubId
const leaveClub = async (req, res) => {
    try {
        const memberId = req.user.member_id;
        const clubId = req.params.clubId;

        await clubModel.leaveClub(memberId, clubId);

        res.status(200).json({
            message: "Successfully left the club."
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error."
        });
    }
};

module.exports = {
    getClubListings,
    enrollClub,
    leaveClub
};