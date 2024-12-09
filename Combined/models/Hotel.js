const { hotelDB } = require("../config/db");
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  checkinDate: { type: Date, required: true },
  checkoutDate: { type: Date, required: true },
  pricePerNight: { type: Number, required: true },
  availableRooms: { type: Number, required: true },
});

module.exports = hotelDB.model("Hotel", hotelSchema);
