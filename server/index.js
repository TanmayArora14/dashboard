// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define schema and model for your data
const dashboardSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topic: String,
  region: String,
  city: String,
});

const DashboardModel = mongoose.model("Dashboard", dashboardSchema);

// API endpoint to get dashboard data
app.get("/api/dashboard", async (req, res) => {
  try {
    const { topic } = req.query;
    let query = {};
    if (topic) {
      query.topic = topic;
    }
    const data = await DashboardModel.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
