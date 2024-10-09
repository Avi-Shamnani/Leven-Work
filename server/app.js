const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clientModel = require("./models/client.model.js");

const cors = require("cors");
const path = require("path");
// console.log("naam :", __dirname);

const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// This is the middlewares to use the frontend to server the file
app.use(cors());

app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  // console.log(req.body);
  try {
    const { name, email, phone, business, services, location, description } =
      req.body;
    const client = new clientModel({
      name,
      email,
      phone,
      business,
      services,
      location,
      description,
    });
    await client.save();
    res
      .status(201)
      .json({ message: "Client data saved successfully!", success: true });
  } catch (error) {
    console.error("Failed to save client data:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to save client data" });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});
