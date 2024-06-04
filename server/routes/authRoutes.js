const express = require("express");
const {
  register,
  login,
  verifyOtp,
  logout,
} = require("../controllers/authController");
const router = express.Router();
const passport = require("passport");

router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/logout", logout);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL + "/login",
    successRedirect: process.env.CLIENT_URL,
  })
);

module.exports = router;
