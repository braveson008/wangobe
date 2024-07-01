// Services
const parkingService = require("../services/parking.service");

const { startParking, stopParking, getHistory } = parkingService;

const startParkingForClient = async (req, res) => {
  const { clientId, cityName, areaName } = req.body;
  try {
    const parking = await startParking(clientId, cityName, areaName);
    res.status(201).send(parking);
  } catch (err) {
    res.status(500).send(`Start parking - Server error, ${err}`);
  }
};

const stopParkingForClient = async (req, res) => {
  const { parkingId } = req.body;
  try {
    const parking = await stopParking(parkingId);
    res.status(200).send(parking);
  } catch (err) {
    res.status(500).send(`Stop parking - Server error, ${err}`);
  }
};

const getParkingHistoryForClient = async (req, res) => {
  const { userId } = req.params;
  try {
    const parkings = await getHistory(userId);
    res.status(200).json({ parkings });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  stopParkingForClient,
  startParkingForClient,
  getParkingHistoryForClient,
};
