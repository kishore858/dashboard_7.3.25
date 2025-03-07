const express = require("express");
const UserData = require("../models/UserData");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Get all user data (only accessible by admin)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const data = await UserData.find({ createdBy: req.admin.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add new user data
router.post("/add", authMiddleware, async (req, res) => {
  const { website, login, password, remarks } = req.body;

  try {
    const newData = new UserData({
      website,
      login,
      password,
      remarks,
      createdBy: req.admin.id,
    });

    await newData.save();
    res.status(201).json({ message: "Data added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
