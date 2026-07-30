const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const clubRoutes = require("./routes/clubRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.json({
        message: "Sports Club Management API is running."
    });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/clubs", clubRoutes);

module.exports = app;