const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(req.ip);
  res.send("hi");
});

app.listen(4000, () => {
  console.log("running on 4000");
});
