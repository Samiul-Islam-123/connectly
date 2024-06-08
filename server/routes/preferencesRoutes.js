const express = require("express");
const preferencesController = require("../controllers/preferencesController");
const authController = require("../controllers/authController");
const router = express.Router();

//dummy route
router.get("/", (req, res) => {
  res.send("Preferences route");
});

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

module.exports = router;
