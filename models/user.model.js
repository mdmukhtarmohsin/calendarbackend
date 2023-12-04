const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  booked_slots: [],
});

const userModel = model("User", userSchema);
module.exports = userModel;
