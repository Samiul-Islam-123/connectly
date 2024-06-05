const mongoose = require("mongoose");

const videoCallSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    default: "Untitled",
  },
  description: {
    type: String,
    default: "No description provided",
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VideoCall =
  mongoose.models.VideoCall || mongoose.model("VideoCall", videoCallSchema);

exports.VideoCall = VideoCall;
