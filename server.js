const express = require("express");
const app = express();

//A middleware interferes with a request before it reaches the routes
//the below is an example of a middleware
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
