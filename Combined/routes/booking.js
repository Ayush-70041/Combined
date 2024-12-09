const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Flight = require("../models/Airline");
const Hotel = require("../models/Hotel");
const CarRental = require("../models/CarRental");

router.post("/", async (req, res) => {
    const bookingData = Object.assign({}, req.body);
    const { userId, flightId, hotelId, carId } = bookingData;
  
    console.log("Received booking data:", bookingData);
  
    try {
      let totalCost = 0;
      let flight, hotel, car;
  
      // Fetch and process flight details
      if (flightId) {
        flight = await Flight.findById(flightId);
        if (flight && flight.availableSeats > 0) {
          flight.availableSeats -= 1;
          await flight.save();
          totalCost += flight.price;
        } else {
          return res.status(400).send("No available seats for the selected flight.");
        }
      }
  
      // Fetch and process hotel details
      if (hotelId) {
        hotel = await Hotel.findById(hotelId);
        if (hotel && hotel.availableRooms > 0) {
          hotel.availableRooms -= 1;
          await hotel.save();
          totalCost += hotel.pricePerNight;
        } else {
          return res.status(400).send("No available rooms at the selected hotel.");
        }
      }
  
      // Fetch and process car rental details
      if (carId) {
        car = await CarRental.findById(carId);
        if (car && car.availableCars > 0) {
          car.availableCars -= 1;
          await car.save();
          totalCost += car.price;
        } else {
          return res.status(400).send("No available cars at the selected location.");
        }
      }
  
      // Save booking details to the database
      const booking = new Booking({
        userId,
        flight,
        hotel,
        carRental: car,
        totalCost
      });
  
      await booking.save();
  
      // Pass booking details to the view
      res.render("success", { booking, flight, hotel, car, totalCost });
  
    } catch (error) {
      console.error("Booking Error:", error.message);
      res.status(500).send("Error processing the booking request.");
    }
  });
  
module.exports = router;
