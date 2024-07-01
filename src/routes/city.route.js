// System
const express = require("express");

// Config
const router = express.Router();

// Controllers
const cityController = require("../controllers/city.controller");

const { addNewCityForClient, getAllCitiesForClient, addAreasToCityForClient } =
  cityController;

router.get("/", getAllCitiesForClient);
router.post("/newcity", addNewCityForClient);
router.post("/add-areas", addAreasToCityForClient);

module.exports = router;
