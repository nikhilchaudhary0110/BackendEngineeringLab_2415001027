
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { isLoggedIn, isAdmin } = require("../middleware/authMiddleware");

router.get("/", authController.home);
router.post("/login", authController.login);
router.get("/dashboard", isLoggedIn, authController.dashboard);
router.get("/admin", isLoggedIn, isAdmin, authController.admin);
router.get("/logout", authController.logout);

module.exports = router;