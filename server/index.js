require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const postRoutes = require("./routes/postRoutes");
const requestRoutes = require("./routes/requestRoutes");
const storyRoutes = require('./routes/storyRoutes')

require("./config/passportConfig"); // Ensure this path is correct

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
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

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

// Use auth routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes)
app.use('/api/post', postRoutes)
app.use('/api/request', requestRoutes)
app.use('/api/story', storyRoutes)

// Basic route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
