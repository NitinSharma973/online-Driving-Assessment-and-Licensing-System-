const express = require("express");
const cors = require("cors");
const config = require("./config");
const examRoutes = require("./routes/exam");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the exam routes
app.use("/exam", examRoutes);
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Middleware and other configurations can be added here

// Start the server
const port = config.port;
app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});

// Connect to MongoDB
connectDB();
