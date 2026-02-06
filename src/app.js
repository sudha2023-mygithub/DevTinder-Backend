const express = require("express");

const app = express();

app.get("/abc/:userid", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Sudharshan", secondName: "Reddy" });
});

app.listen(3000, () => {
  console.log("Server is Successfully listening on port 3000");
});
