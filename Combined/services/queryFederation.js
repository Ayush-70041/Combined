const Flight = require("../models/Airline");
const Hotel = require("../models/Hotel");
const CarRental = require("../models/CarRental");

const federatedSearch = async ({ location, date }) => {
  try {
    const [flights, hotels, cars] = await Promise.all([
      Flight.find({ to: location }),
      Hotel.find({ city: location, checkinDate: { $lte: date }, checkoutDate: { $gte: date } }),
      CarRental.find({ pickupLocation: location, pickupDate: { $lte: date }, dropoffDate: { $gte: date } }),
    ]);

    return { flights, hotels, cars };
  } catch (error) {
    throw new Error("Error in federated search: " + error.message);
  }
};

module.exports = { federatedSearch };
