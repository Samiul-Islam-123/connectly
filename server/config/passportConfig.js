const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          user.googleToken = refreshToken;
          await user.save();
        }
        if (!user) {
          const newUser = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            googleToken: refreshToken,
            user: {
              name: profile.displayName,
              email: profile.emails[0].value,
              profileImage: profile.photos[0].value,
              provider: "google",
            },
            subscription: [],
          });
          user = await newUser.save();
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

exports.passport = passport;
