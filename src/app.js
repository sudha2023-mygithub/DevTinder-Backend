const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from server");
});

app.use("/", (req, res) => {
  res.send("Hello from Home page");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello Sudharshan");
});

app.listen(3000, () => {
  console.log("Server is Successfully listening on port 3000");
});
