// routes/exam.js

const express = require("express");
const router = express.Router();
const examController = require("../controllers/examController");

// Define routes with callback functions
router.get("/questions", examController.getQuestions);
router.post("/submit", examController.submitExam);

module.exports = router;
