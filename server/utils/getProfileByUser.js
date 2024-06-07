const Profile = require("../models/Profile");

const getProfileByUserId = async (userId) => {
  return await Profile.findOne({ user: userId });
};

module.exports = getProfileByUserId;
