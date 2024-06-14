// controllers/profileController.js

const Profile = require("../models/profileModel");
const User = require("../models/userModel");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

// Create User Profile
exports.createProfile = async (req, res) => {
  const { bio, interests, location, socialLinks } = req.body;

  let profilePicture;
  const profilePictureLocalPath = req?.files?.profilePicture[0]?.path;
  if (profilePictureLocalPath) {
    const cloudinaryResponse = await uploadToCloudinary(
      profilePictureLocalPath
    );
    if (cloudinaryResponse) {
      profilePicture = cloudinaryResponse.secure_url;
    }
  }

  const profileFields = {};
  profileFields.user = req.user.id;
  if (bio) profileFields.bio = bio;
  if (interests)
    profileFields.interests = interests
      .split(",")
      .map((interest) => interest.trim());
  if (location) profileFields.location = location;
  if (profilePicture) profileFields.profilePicture = profilePicture;
  if (socialLinks) profileFields.socialLinks = socialLinks;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      return res.status(400).json({
        message: "Profile already exists. Use update endpoint to modify.",
      });
    }
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Read Current User Profile
exports.getCurrentProfile = async (req, res) => {
  // console.log("Executing this route")
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "email"])
      .populate("friendRequestsSent", ["name", "email", "profilePicture"])
      .populate("friendRequestsReceived", ["name", "email", "profilePicture"])
      .populate("friends", ["name", "email", "profilePicture"])
      .populate("followers", ["name", "email", "profilePicture"])
      .populate("following", ["name", "email", "profilePicture"]);

    if (!profile) {
      return res
        .status(400)
        .json({ message: "There is no profile for this user" });
    }

    res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Read User Profile by User ID
exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate(
      "user",
      ["name", "email"]
    );

    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(500).send("Server error");
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  const { bio, interests, location, socialLinks } = req.body;

  let profilePicture;
  const profilePictureLocalPath = req?.files?.profilePicture[0]?.path;

  const profileFields = {};
  if (bio) profileFields.bio = bio;
  if (interests)
    profileFields.interests = interests
      .split(",")
      .map((interest) => interest.trim());
  if (location) profileFields.location = location;
  if (socialLinks) profileFields.socialLinks = socialLinks;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Delete existing profile picture from Cloudinary if a new one is provided
      if (profilePictureLocalPath && profile.profilePicture) {
        await deleteFromCloudinary(profile.profilePicture);
      }

      // Upload new profile picture to Cloudinary
      if (profilePictureLocalPath) {
        const cloudinaryResponse = await uploadToCloudinary(
          profilePictureLocalPath
        );
        if (cloudinaryResponse) {
          profileFields.profilePicture = cloudinaryResponse.secure_url;
        }
      }

      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    } else {
      return res.status(400).json({
        message:
          "Profile not found. Use create endpoint to create a new profile.",
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    if (profile.profilePicture) {
      await deleteFromCloudinary(profile.profilePicture);
    }

    await Profile.findOneAndRemove({ user: req.user.id });

    res.json({ message: "Profile deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
