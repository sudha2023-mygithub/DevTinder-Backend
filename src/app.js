const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, then) => {
    console.log("First route handler");
    res.send("1st route handler");
    then();
  },
  (req, res) => {
    console.log("Second route handler");
    res.send("2nd route handler");
  },
);

app.listen(3000, () => {
  console.log("Server is Successfully listening on port 3000");
});
