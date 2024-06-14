const jwt = require("jsonwebtoken");
exports.createToken = async (data) => {
  return jwt.sign(
    {
      success: true,
      email: data.email,
      name: data.name,
      id: data.id,
      profileImage: data.profileImage,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};
