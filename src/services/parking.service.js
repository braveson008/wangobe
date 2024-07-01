// Model
const Parking = require("../models/parking.model");

// Services
const cityService = require("./city.service");

const startParking = async (clientId, cityName, areaName) => {
  const ongoingParking = await Parking.findOne({ clientId, status: "ongoing" });
  if (ongoingParking) {
    throw new Error("Parking session already ongoing");
  }
  const city = await cityService.getCity(cityName);
  const area = cityService.getArea(city, areaName);
  const parking = new Parking({
    clientId,
    city: cityName,
    area: areaName,
    startTime: new Date(),
    status: "ongoing",
  });
  await parking.save();
  return parking;
};

const stopParking = async (parkingId) => {
  let parking = await Parking.findById(parkingId);
  if (!parking) {
    throw new Error("Parking not found");
  }
  parking.endTime = new Date();

  const fee = await cityService.calculateParkingFee(
    parking.city,
    parking.area,
    parking.startTime,
    parking.endTime
  );
  parking.fee = fee;
  parking.status = "finished";

  await parking.save();
  return parking;
};

const getHistory = async (clientId) => {
  const parkings = await Parking.find({ clientId });
  return parkings;
};

module.exports = {
  getHistory,
  stopParking,
  startParking,
};
