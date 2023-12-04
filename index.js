const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./controllers/user.controller");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT=process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hi: "hi" });
});

app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
    console.log("server running on port",PORT);
  } catch (error) {
    console.log(error);
  }
});
