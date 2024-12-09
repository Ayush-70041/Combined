const { carRentalDB } = require("../config/db");
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  dropoffDate: { type: Date, required: true },
  price: { type: Number, required: true },
  availableCars: { type: Number, required: true },
});

module.exports = carRentalDB.model("CarRental", carSchema);
