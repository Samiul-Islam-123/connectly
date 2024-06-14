const mongoose = require("mongoose");

const callSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CallParticipant" },
  ],
  invitations: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CallInvitation" },
  ],
});

const callParticipantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  call: { type: mongoose.Schema.Types.ObjectId, ref: "Call", required: true },
  joinTime: { type: Date, default: Date.now },
  leaveTime: { type: Date },
});

const callInvitationSchema = new mongoose.Schema({
  call: { type: mongoose.Schema.Types.ObjectId, ref: "Call", required: true },
  invitee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
  respondedAt: { type: Date },
});
const Call = mongoose.models.Call || mongoose.model("Call", callSchema);
const CallParticipant =
  mongoose.models.CallParticipant ||
  mongoose.model("CallParticipant", callParticipantSchema);
const CallInvitation =
  mongoose.models.CallInvitation ||
  mongoose.model("CallInvitation", callInvitationSchema);

exports.Call = Call;
exports.CallParticipant = CallParticipant;
exports.CallInvitation = CallInvitation;
