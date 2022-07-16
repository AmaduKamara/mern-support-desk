const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors")

const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

// Express app
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the support desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// Start listening
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
