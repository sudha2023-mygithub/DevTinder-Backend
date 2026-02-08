const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Sudharshan",
    lastName: "Reddy",
    emailId: "msreddy885@gmail.com",
    password: "1234456789",
  };
  // Creating a new instance of user model
  const user = new User(userObj);
  try {
    await user.save();
    res.send("user added Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("Server is Successfully listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Database cannot be connected");
  });
