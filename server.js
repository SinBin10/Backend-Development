const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("This is a middleware..");
});

app.get("/", function (req, res) {
  res.send("Hello Earth!");
});

app.get("/check", function (req, res) {
  res.send("running server with nodemon...");
});

app.listen(3000);
