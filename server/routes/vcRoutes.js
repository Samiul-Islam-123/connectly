const { Router } = require("express");
const { VideoCall } = require("../models/vc.model");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Video Call API" });
});

module.exports = router;
