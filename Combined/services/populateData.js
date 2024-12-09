const { airlineDB, hotelDB, carRentalDB } = require("../config/db");
const Flight = require("../models/Airline");
const Hotel = require("../models/Hotel");
const CarRental = require("../models/CarRental");

const populateData = async () => {
  try {
    await Promise.all([
      Flight.deleteMany(),
      Hotel.deleteMany(),
      CarRental.deleteMany()
    ]);

    // Populate Flights with 10 sample records
    const flights = [
      { flightNumber: "AI101", from: "Delhi", to: "Mumbai", departure: new Date("2024-12-15T10:00:00"), arrival: new Date("2024-12-15T12:00:00"), price: 5000, availableSeats: 150 },
      { flightNumber: "AI202", from: "Mumbai", to: "Bangalore", departure: new Date("2024-12-16T14:00:00"), arrival: new Date("2024-12-16T16:00:00"), price: 4000, availableSeats: 100 },
      { flightNumber: "AI303", from: "Bangalore", to: "Delhi", departure: new Date("2024-12-17T09:00:00"), arrival: new Date("2024-12-17T11:00:00"), price: 4500, availableSeats: 120 },
      { flightNumber: "AI404", from: "Chennai", to: "Mumbai", departure: new Date("2024-12-18T08:00:00"), arrival: new Date("2024-12-18T10:00:00"), price: 4700, availableSeats: 140 },
      { flightNumber: "AI505", from: "Dubai", to: "New York", departure: new Date("2024-12-19T15:00:00"), arrival: new Date("2024-12-19T20:00:00"), price: 12000, availableSeats: 80 },
      { flightNumber: "AI606", from: "Paris", to: "London", departure: new Date("2024-12-20T11:00:00"), arrival: new Date("2024-12-20T12:30:00"), price: 6000, availableSeats: 50 },
      { flightNumber: "AI707", from: "San Francisco", to: "Los Angeles", departure: new Date("2024-12-21T10:00:00"), arrival: new Date("2024-12-21T11:00:00"), price: 3000, availableSeats: 90 },
      { flightNumber: "AI808", from: "Tokyo", to: "Seoul", departure: new Date("2024-12-22T09:00:00"), arrival: new Date("2024-12-22T13:00:00"), price: 7000, availableSeats: 60 },
      { flightNumber: "AI909", from: "Sydney", to: "Melbourne", departure: new Date("2024-12-23T08:00:00"), arrival: new Date("2024-12-23T10:00:00"), price: 4000, availableSeats: 100 },
      { flightNumber: "AI010", from: "Berlin", to: "Rome", departure: new Date("2024-12-24T10:00:00"), arrival: new Date("2024-12-24T12:00:00"), price: 5500, availableSeats: 85 }
    ];

    await Flight.insertMany(flights);

    // Populate Hotels with 10 sample records
    const hotels = [
      { name: "Taj Palace", city: "Mumbai", checkinDate: new Date("2024-12-15"), checkoutDate: new Date("2024-12-20"), pricePerNight: 8000, availableRooms: 30 },
      { name: "The Oberoi", city: "Bangalore", checkinDate: new Date("2024-12-16"), checkoutDate: new Date("2024-12-22"), pricePerNight: 7000, availableRooms: 25 },
      { name: "Radisson Blu", city: "Delhi", checkinDate: new Date("2024-12-17"), checkoutDate: new Date("2024-12-23"), pricePerNight: 9000, availableRooms: 20 },
      { name: "Novotel", city: "Chennai", checkinDate: new Date("2024-12-18"), checkoutDate: new Date("2024-12-24"), pricePerNight: 8500, availableRooms: 15 },
      { name: "Hilton", city: "Dubai", checkinDate: new Date("2024-12-19"), checkoutDate: new Date("2024-12-25"), pricePerNight: 10000, availableRooms: 40 },
      { name: "Four Seasons", city: "Paris", checkinDate: new Date("2024-12-20"), checkoutDate: new Date("2024-12-26"), pricePerNight: 11000, availableRooms: 10 },
      { name: "InterContinental", city: "San Francisco", checkinDate: new Date("2024-12-21"), checkoutDate: new Date("2024-12-27"), pricePerNight: 9500, availableRooms: 20 },
      { name: "Marriott", city: "Tokyo", checkinDate: new Date("2024-12-22"), checkoutDate: new Date("2024-12-28"), pricePerNight: 8800, availableRooms: 25 },
      { name: "Sheraton", city: "Sydney", checkinDate: new Date("2024-12-23"), checkoutDate: new Date("2024-12-29"), pricePerNight: 7500, availableRooms: 15 },
      { name: "Mandarin Oriental", city: "Berlin", checkinDate: new Date("2024-12-24"), checkoutDate: new Date("2024-12-30"), pricePerNight: 8700, availableRooms: 20 }
    ];

    await Hotel.insertMany(hotels);

    // Populate Car Rentals with 10 sample records
    const cars = [
      { model: "Maruti Suzuki Dzire", pickupLocation: "Mumbai", pickupDate: new Date("2024-12-15"), dropoffDate: new Date("2024-12-20"), price: 1500, availableCars: 20 },
      { model: "Hyundai Creta", pickupLocation: "Bangalore", pickupDate: new Date("2024-12-16"), dropoffDate: new Date("2024-12-22"), price: 2000, availableCars: 15 },
      { model: "Toyota Innova", pickupLocation: "Delhi", pickupDate: new Date("2024-12-17"), dropoffDate: new Date("2024-12-23"), price: 1800, availableCars: 10 },
      { model: "Nissan Altima", pickupLocation: "Chennai", pickupDate: new Date("2024-12-18"), dropoffDate: new Date("2024-12-24"), price: 1600, availableCars: 12 },
      { model: "Ford Mustang", pickupLocation: "Dubai", pickupDate: new Date("2024-12-19"), dropoffDate: new Date("2024-12-25"), price: 5000, availableCars: 5 },
      { model: "Chevrolet Cruze", pickupLocation: "Paris", pickupDate: new Date("2024-12-20"), dropoffDate: new Date("2024-12-26"), price: 1700, availableCars: 15 },
      { model: "Jeep Compass", pickupLocation: "San Francisco", pickupDate: new Date("2024-12-21"), dropoffDate: new Date("2024-12-27"), price: 2000, availableCars: 10 },
      { model: "Audi Q5", pickupLocation: "Tokyo", pickupDate: new Date("2024-12-22"), dropoffDate: new Date("2024-12-28"), price: 4000, availableCars: 8 },
      { model: "BMW X5", pickupLocation: "Sydney", pickupDate: new Date("2024-12-23"), dropoffDate: new Date("2024-12-29"), price: 4500, availableCars: 5 },
      { model: "Lexus RX500", pickupLocation: "Berlin", pickupDate: new Date("2024-12-24"), dropoffDate: new Date("2024-12-30"), price: 3000, availableCars: 10 }
    ];

    await CarRental.insertMany(cars);

    console.log("Data populated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error populating data:", error);
    process.exit(1);
  }
};

populateData();
