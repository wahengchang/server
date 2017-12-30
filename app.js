var express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoURL = process.env.MONGO_URL;
const databaseKey = `mongodb://${mongoUsername}:${mongoPassword}@${mongoURL}`;

require("./modules/dataBase/user");

var app = express();

// Install middleware to parse the request body
app.use(bodyParser.json());

// Route handler
app.use("/api/v1/users", require("./routers/users"));

app.get("/", function(req, res) {
  res.send("hello");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
