const express = require("express");
const preferencesController = require("../controllers/preferencesController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get(
  "/on",
  authController.authenticate,
  preferencesController.preferencesOn
);
router.get(
  "/off",
  authController.authenticate,
  preferencesController.preferencesOff
);

router.get(
  "/",
  authController.authenticate,
  preferencesController.searchProfilesByInterest
);

router.get("/all", preferencesController.getAllProfiles);

module.exports = router;
