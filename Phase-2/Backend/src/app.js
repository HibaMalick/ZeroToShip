const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const adminRoutes = require("./routes/adminRoutes");
// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.json({
        message: "Sports Club Management API is running."
    });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

module.exports = app;

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);