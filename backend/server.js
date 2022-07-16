const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");


const PORT = process.env.PORT || 5000;

// Express app
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the support desk API" });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'))


// Start listening
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
