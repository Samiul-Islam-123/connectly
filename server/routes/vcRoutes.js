const { Router } = require("express");
const authController = require("../controllers/authController");
const callController = require("../controllers/vcController");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Video Call API" });
});

router.post("/create", authController.authenticate, callController.createCall);
router.get("/:callId", callController.getCallDetails);
router.post(
  "/send-invitation",
  authController.authenticate,
  callController.sendInvitation
);
router.post(
  "/respond-invite",
  authController.authenticate,
  callController.respondToInvitation
);

router.post(
  "/remove-user",
  authController.authenticate,
  callController.removeUserFromCall
);
router.post("/leave", authController.authenticate, callController.leaveCall);
router.post(
  "/end/:callId",
  authController.authenticate,
  callController.endCall
);
router.get(
  "/history",
  authController.authenticate,
  callController.getCallHistory
);

module.exports = router;
