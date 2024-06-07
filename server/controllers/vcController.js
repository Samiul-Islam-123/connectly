const mongoose = require("mongoose");
const { Call, CallParticipant, CallInvitation } = require("../models/vc.model");
const Profile = require("../models/profileModel");
const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");
const getProfileByUserId = require("../utils/getProfileByUser");

const createCall = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const newCall = new Call({
      creator: profile._id,
      participants: [],
    });

    await newCall.save();

    const newParticipant = new CallParticipant({
      call: newCall._id,
      user: profile._id,
    });

    await newParticipant.save();
    newCall.participants.push(newParticipant._id);
    await newCall.save();

    res.status(201).json(newCall);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error creating call", error });
  }
};

const getCallDetails = async (req, res) => {
  try {
    const { callId } = req.params;
    const call = await Call.findById(callId).populate("participants");
    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }
    res.status(200).json(call);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching call details", error });
  }
};

const sendInvitation = async (req, res) => {
  try {
    const { callId, userId, callLink } = req.body;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const call = await Call.findById(callId)
      .populate("invitations")
      .populate("participants");
    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    if (
      call.participants.includes(profile._id) ||
      call.invitations.some((invite) => invite.invitee === profile._id)
    ) {
      return res
        .status(400)
        .json({ message: "User already in the call or already invited" });
    }

    const newInvitation = new CallInvitation({
      call: callId,
      invitee: profile._id,
    });

    await newInvitation.save();
    call.invitations.push(newInvitation._id);
    await call.save();

    const invitedUser = await User.findById(profile.user);
    if (invitedUser) {
      await sendEmail(
        invitedUser.email,
        `Connectly Invitation to Join a Call`,
        `You have been invited to join a call by ${req.user.name} ${req.user.email}. Click the link to join: ${callLink}`
      );
    }

    res.status(200).json({ message: `Invitation sent to user ${userId}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error sending invitation", error });
  }
};

const respondToInvitation = async (req, res) => {
  try {
    const { callId, accept } = req.body;
    const userId = req.user.id;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const invitation = await CallInvitation.findOne({
      call: callId,
      invitee: profile._id,
    });
    if (!invitation) {
      return res.status(404).json({ message: "Invitation not found" });
    }

    if (invitation.status !== "pending") {
      return res.status(400).json({ message: "Invitation already responded" });
    }

    invitation.status = accept ? "accepted" : "declined";
    invitation.respondedAt = new Date();
    await invitation.save();

    if (accept) {
      const newParticipant = new CallParticipant({
        call: callId,
        user: profile._id,
      });

      await newParticipant.save();

      const call = await Call.findById(callId);
      call.participants.push(newParticipant._id);
      await call.save();
    }

    res.status(200).json(invitation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error responding to invitation", error });
  }
};

const removeUserFromCall = async (req, res) => {
  try {
    const { callId, userId } = req.body;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const call = await Call.findById(callId);
    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    call.participants = call.participants.filter(
      (participant) => participant.toString() !== profile._id.toString()
    );
    await call.save();

    await CallParticipant.findOneAndUpdate(
      { call: callId, user: profile._id },
      { leaveTime: new Date() }
    );

    res.status(200).json({ message: "User removed from call" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error removing user from call", error });
  }
};

const leaveCall = async (req, res) => {
  try {
    const { callId } = req.body;
    const userId = req.user.id;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const call = await Call.findById(callId);
    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    call.participants = call.participants.filter(
      (participant) => participant.toString() !== profile._id.toString()
    );
    await call.save();

    await CallParticipant.findOneAndUpdate(
      { call: callId, user: profile._id },
      { leaveTime: new Date() }
    );

    res.status(200).json({ message: "User left the call" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error leaving call", error });
  }
};

const endCall = async (req, res) => {
  try {
    const { callId } = req.params;

    const call = await Call.findByIdAndUpdate(
      callId,
      { endTime: new Date() },
      { new: true }
    );

    if (!call) {
      return res.status(404).json({ message: "Call not found" });
    }

    res.status(200).json(call);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error ending call", error });
  }
};

const getCallHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await getProfileByUserId(userId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const callHistory = await CallParticipant.aggregate([
      { $match: { user: mongoose.Types.ObjectId(profile._id) } },
      {
        $lookup: {
          from: "calls",
          localField: "call",
          foreignField: "_id",
          as: "callDetails",
        },
      },
      { $unwind: "$callDetails" },
      {
        $lookup: {
          from: "profiles",
          localField: "callDetails.creator",
          foreignField: "_id",
          as: "creatorDetails",
        },
      },
      { $unwind: "$creatorDetails" },
      {
        $project: {
          _id: 0,
          callId: "$callDetails._id",
          callCreator: "$creatorDetails.user",
          callStartTime: "$callDetails.startTime",
          callEndTime: "$callDetails.endTime",
          joinTime: "$joinTime",
          leaveTime: "$leaveTime",
          duration: {
            $cond: {
              if: { $ifNull: ["$leaveTime", false] },
              then: { $subtract: ["$leaveTime", "$joinTime"] },
              else: { $subtract: [new Date(), "$joinTime"] },
            },
          },
        },
      },
      { $sort: { joinTime: -1 } },
    ]);

    res.status(200).json(callHistory);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error fetching call history", error });
  }
};

module.exports = {
  createCall,
  getCallDetails,
  sendInvitation,
  respondToInvitation,
  removeUserFromCall,
  leaveCall,
  endCall,
  getCallHistory,
};
