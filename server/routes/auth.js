// auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

// Logout route
router.get("/logout", authController.logout);

module.exports = router;
