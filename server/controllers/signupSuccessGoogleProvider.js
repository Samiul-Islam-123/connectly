const User = require("../models/userModel");
const { createToken } = require("../utils/token-manager");

exports.signupSuccessGoogleProvider = async (req, res) => {
  try {
    const sessions = req.sessionStore.sessions;
    const sessionData = Object.values(sessions).map((session) =>
      JSON.parse(session)
    );
    const passportSession = sessionData.find((session) => session.passport);

    if (!passportSession || !passportSession.passport.user) {
      throw new Error("User authentication failed");
    }

    const googleId = passportSession.passport.user;

    try {
      const userData = await User.findOne({ googleId: googleId });

      if (userData) {
        console.log(userData);
        const token = await createToken({
          email: userData.email,
          name: userData.name,
          id: userData._id,
          profileImage: userData.profileImage | "",
        });

        return res.status(200).json({
          token: token,
          message: "User Created Successfully",
          id: userData._id.toString(),
          name: userData.user.name,
          email: userData.email,
          profileImage: userData.user.profileImage,
        });
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      return res.status(500).json({
        message: `Error finding user or creating token: ${error.message}`,
      });
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
