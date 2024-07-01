// System
const express = require("express");

// Config
const router = express.Router();

// Controllers
const parkingController = require("../controllers/parking.controller");

const {
  stopParkingForClient,
  startParkingForClient,
  getParkingHistoryForClient,
} = parkingController;

router.post("/stop", stopParkingForClient);
router.post("/start", startParkingForClient);
router.get("/:userId", getParkingHistoryForClient);

module.exports = router;
