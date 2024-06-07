const { Router } = require("express");
const {
  fetchAllNotifications,
  readNotification,
} = require("../controllers/notificationController");
const authController = require("../controllers/authController");

const router = Router();

router.get("/", (req, res) => {
  res.send("Notification route");
});

router.get("/all", authController.authenticate, fetchAllNotifications);
router.post("/read/:id", authController.authenticate, readNotification);

module.exports = router;
