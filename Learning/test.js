const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Binay !");
  console.log("server running");
});

app.listen(3000);
