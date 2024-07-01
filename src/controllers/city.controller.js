// Services
const cityService = require("../services/city.service");

const { getAllCities, addCity, addAreasToCity } = cityService;

const addNewCityForClient = async (req, res) => {
  const { name, areas } = req.body;
  try {
    const city = await addCity(name, areas);
    res.status(201).send(city);
  } catch (err) {
    res.status(500).send(`Add city - Server error, ${err}`);
  }
};

const addAreasToCityForClient = async (req, res) => {
  const { cityName, newAreas } = req.body;
  try {
    const city = await addAreasToCity(cityName, newAreas);
    res.status(200).json(city);
  } catch (err) {
    res.status(500).send(`Add new area - Server error, ${err.message}`);
  }
};

const getAllCitiesForClient = async (_, res) => {
  try {
    const cities = await getAllCities();
    res.status(200).send(cities);
  } catch (err) {
    res.status(500).send(`Get all cities - Server error, ${err}`);
  }
};

module.exports = {
  addNewCityForClient,
  getAllCitiesForClient,
  addAreasToCityForClient,
};
