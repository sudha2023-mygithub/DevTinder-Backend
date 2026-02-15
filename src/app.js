const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestsRouter = require("./routes/requests.js");
const userRouter = require("./routes/user.js");

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestsRouter);
app.use("/", userRouter);

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
