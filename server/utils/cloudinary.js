const { cloudinary } = require("../config/cloudinary.config");
const fs = require("fs");

exports.uploadToCloudinary = async (localFilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

exports.deleteFromCloudinary = async (url) => {
  const publicId = url.split("/").pop().split(".")[0];
  try {
    await cloudinary.uploader.destroy(publicId);
    return true;
  } catch (error) {
    return false;
  }
};
