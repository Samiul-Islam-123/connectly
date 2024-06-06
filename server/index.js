require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
const requestRoutes = require("./routes/requestRoutes");
const storyRoutes = require("./routes/storyRoutes");
const cors = require('cors');

require("./config/passportConfig");
require("dotenv").config();
const vcRoutes = require("./routes/vcRoutes");

require("./config/passportConfig"); // Ensure this path is correct

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/post", postRoutes);
app.use("/api/request", requestRoutes);
app.use("/api/story", storyRoutes);
app.use("/api/vc", vcRoutes);


// Basic route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is up and running at on http://localhost:${PORT}`);
});
