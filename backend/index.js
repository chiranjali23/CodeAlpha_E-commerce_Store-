const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect('mongodb+srv://chiranjali:kodithuwakku@cluster0.yotyc1y.mongodb.net/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("MongoDB connection error: ", err);
});

// API creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Start server
app.listen(port, () => {
    console.log("Server running on port " + port);
});
