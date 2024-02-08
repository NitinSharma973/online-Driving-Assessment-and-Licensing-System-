const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/profile", profileController.getProfile);
router.put("/profile", profileController.updateProfile);
router.post("/upload", profileController.uploadDocuments);

module.exports = router;
