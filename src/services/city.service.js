// Model
const City = require("../models/city.model");

// Data
const cities = require("../data/cities");
const pricingStrategies = require("../utils/pricingStrategies");

const getCity = async (cityName) => {
  const city = await City.findOne({ name: cityName });
  if (!city) {
    throw new Error(`City not supported, ${cityName}`);
  }
  return city;
};

const getArea = (city, areaName) => {
  const area = city.areas.find((area) => area.name === areaName);
  if (!area) {
    throw new Error("Area not supported");
  }
  return area;
};

const calculateParkingFee = async (cityName, areaName, startTime, endTime) => {
  const city = await getCity(cityName);
  const area = getArea(city, areaName);
  const strategy = pricingStrategies[area.pricingStrategy];
  if (!strategy) {
    throw new Error("Unknown pricing strategy");
  }
  return strategy(area.parameters, startTime, endTime);
};

const addCity = async (name, areas) => {
  let city = await City.findOne({ name });
  if (city) {
    throw new Error(`City ${name} already exists`);
  }

  areas?.forEach((area) => {
    if (!pricingStrategies[area.pricingStrategy]) {
      throw new Error(
        `Strategy ${area.pricingStrategy} not supported for area ${area.name}`
      );
    }
  });

  city = new City({ name, areas });
  await city.save();
  return city;
};

const getAllCities = async () => {
  const cities = await City.find();
  return cities;
};

const addAreasToCity = async (cityName, newAreas) => {
  const city = await getCity(cityName);

  newAreas?.forEach((newArea) => {
    if (!pricingStrategies[newArea.pricingStrategy]) {
      throw new Error(
        `Strategy ${newArea.pricingStrategy} not supported for area ${newArea.name}`
      );
    }
    if (city.areas.some((area) => area.name === newArea.name)) {
      throw new Error(
        `Area ${newArea.name} already exists in city ${cityName}`
      );
    }
  });

  city.areas = city.areas.concat(newAreas);
  await city.save();
  return city;
};

module.exports = {
  getCity,
  getArea,
  addCity,
  getAllCities,
  addAreasToCity,
  calculateParkingFee,
};
