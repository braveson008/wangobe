// System
const mongoose = require("mongoose");

const clientModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  carPlateNumber: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("Client", clientModel);

module.exports = User;
