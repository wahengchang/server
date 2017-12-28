// Reference
// https://github.com/globalbanana/website/blob/dev/src/router/login.js

const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("Users");

// Retrieve the user record
router.get("/get/:username", (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "Cannot find user" });
    } else {
      res.json({ success: true, msg: "Your name is " + user.name });
    }
  });
});

// Register a new user
router.post("/register", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    gender: req.body.gender
  });

  newUser.save(err => {
    if (err) {
      res.json({ success: false, msg: "Failed to register" });
    } else {
      res.json({ success: true, msg: "Registered user" });
    }
  });
});

// Edit the user profile
router.put("/edit", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "Cannot find user" });
    } else {
      user.name = req.body.name;
      user.gender = req.body.gender;

      user.save(err => {
        if (err) {
          res.json({ success: false, msg: "Cannot save user" });
        } else {
          res.json({ success: true, msg: "User saved" });
        }
      });
    }
  });
});

// Delete a user
router.delete("/delete", (req, res) => {
  User.findOneAndRemove({ username: req.body.username }, err => {
    if (err) {
      res.json({ success: false, msg: "Cannot remover user" });
    } else {
      res.json({ success: true, msg: "User removed" });
    }
  });
});

module.exports = router;
