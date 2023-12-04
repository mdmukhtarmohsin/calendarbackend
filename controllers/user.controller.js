const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/user.model");

const userRouter = express.Router();

userRouter.get("/get", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error", error: error });
  }
});

userRouter.get("/search/:q", async (req, res) => {
  try {
    const { q } = req.params;
    const users = await userModel.find({ name: { $regex: q } });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error", error: error });
  }
});

userRouter.post("/add", async (req, res) => {
  try {
    const user = new userModel(req.body);
    user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error", error: error });
  }
});

userRouter.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error", error: error });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error", error: error });
  }
});

module.exports = userRouter;
