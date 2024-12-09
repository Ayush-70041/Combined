const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: String },
  flight: { type: Object, default: null },
  hotel: { type: Object, default: null },
  carRental: { type: Object, default: null },
  totalCost: { type: Number, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
