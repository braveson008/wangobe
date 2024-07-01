// System
const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
  fee: { type: Number },
  endTime: { type: Date },
  city: { type: String, required: true },
  area: { type: String, required: true },
  startTime: { type: Date, required: true },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["ongoing", "finished"],
    default: "ongoing",
  },
});

module.exports = mongoose.model("Parking", ParkingSchema);
