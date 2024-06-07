const Profile = require("../models/profileModel");

const getProfileByUserId = async (userId) => {
  return await Profile.findOne({ user: userId }).populate("user");
};

module.exports = getProfileByUserId;
