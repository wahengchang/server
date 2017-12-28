// Reference
// https://github.com/globalbanana/website/blob/dev/src/router/login.js

const express = require("express");
const router = express.Router();

const advancedUserModel = require("../modules/dataBase/advancedUsers.js");

// Retrieve the user record
router.get("/get/:username", (req, res) => {
  let condition = { username: req.params.username };

  advancedUserModel
    .getByCondition(condition)
    .then(obj => res.send(`Your name is ${obj.name}, ok?`))
    .catch(err =>
      res.send(`The username ${req.params.username} does not exists`)
    );
});

// Register a new user
router.post("/register", (req, res) => {
  let data = {
    name: req.body.name,
    id: req.body.id,
    username: req.body.username,
    gender: req.body.gender
  };

  advancedUserModel
    .create(data)
    .then(
      () => res.json({ success: true, msg: "Registered user" }),
      err => res.json({ success: false, msg: "Failed to register" })
    );
});

// Edit the user profile
router.put("/edit", (req, res) => {
  let condition = {
    username: req.body.username
  };

  let update = {
    name: req.body.name,
    gender: req.body.gender,
    id: req.body.id
  };

  advancedUserModel
    .updateByCondition(condition, update, null)
    .then(
      () => res.json({ success: true, msg: "Updated user" }),
      err => res.json({ success: false, msg: "Failed to update user" })
    );
});

// Delete a user
router.delete("/delete", (req, res) => {
  let condition = {
    username: req.body.username
  };

  advancedUserModel
    .deleteByCondition(condition, null)
    .then(
      () => res.json({ success: true, msg: "Deleted user" }),
      err => res.json({ success: false, msg: "Failed to delete user" })
    )
});

module.exports = router;
