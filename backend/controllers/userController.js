const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

// @description     Register a User
// @route           /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
  // Getting input fields data as body data
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find if user already exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash user password that gets saved to the database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({ name, email, password: hashedPassword });

  // Return the created user
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @description     Login a User
// @route           /api/users/login
// @access          Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User Route");
});

module.exports = { registerUser, loginUser };
