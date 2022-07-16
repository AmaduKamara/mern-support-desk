const express = require("express");
const { registerUser, loginUser, getMe } = require("../controllers/userController");

const router = express.Router();

// Routes and controller functions invocked
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
