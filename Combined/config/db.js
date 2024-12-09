const mongoose = require("mongoose");

const airlineDB = mongoose.createConnection("mongodb+srv://ayushanand70041:ayush@airlinedb.lxfk0.mongodb.net/?retryWrites=true&w=majority&appName=airlineDB");
const hotelDB = mongoose.createConnection("mongodb+srv://kartiksaroha2001:8Rv2nOr931XXX3VO@cluster0.5kbnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const carRentalDB = mongoose.createConnection("mongodb+srv://utkarsh21107:uks111@carrentaldb.kjts3.mongodb.net/?retryWrites=true&w=majority&appName=carRentalDB");

module.exports = { airlineDB, hotelDB, carRentalDB };
