const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pricingStrategy: { type: String, required: true },
  parameters: { type: mongoose.Schema.Types.Mixed, required: true },
});

const CitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  areas: [AreaSchema],
});

module.exports = mongoose.model("City", CitySchema);
