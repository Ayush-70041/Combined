require('dotenv').config();  // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const searchRoutes = require("./routes/search");
const bookingRoutes = require("./routes/booking");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Set up sessions
app.use(session({
  secret: process.env.SESSION_SECRET || "secretKey",
  resave: false,
  saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// View engine setup
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", { user: req.user || null });  // Pass user object or null
  });
  
app.use("/search", searchRoutes);
app.use("/booking", bookingRoutes);

// Database Connection
mongoose.connect(process.env.BOOKING_DB_URI)
.then(() => console.log("Connected to the booking database successfully!"))
.catch((err) => console.error("Database connection error:", err));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
