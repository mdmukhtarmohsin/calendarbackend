const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./controllers/user.controller");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hi: "hi" });
});

app.use("/user", userRouter);

app.listen(8000, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
    console.log("server running on port 8000");
  } catch (error) {
    console.log(error);
  }
});
