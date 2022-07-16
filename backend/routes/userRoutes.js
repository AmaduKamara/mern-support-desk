const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// Routes and controller functions invocked
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
