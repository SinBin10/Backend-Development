const express = require("express");
const app = express();

//A middleware interferes with a request before it reaches the routes
//the below is an example of a middleware, there can be multiple middlewares
app.use(function (req, res, next) {
  console.log("This is a middleware..");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello Earth!");
});

app.get("/check", function (req, res) {
  return next(new Error("Someting went wrong !"));
});

app.use((err, req, res, next) => {
  //   console.log("An error");
  res.status(500).send("Error occured !");
});

app.listen(3000);
