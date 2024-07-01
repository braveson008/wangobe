// Model
const Client = require("../models/client.model");

const register = async (clientData) => {
  const { email, fullName, address, carPlateNumber } = clientData;

  if (!email || !fullName || !address || !carPlateNumber) {
    throw new Error("All fields are required");
  }

  const clientExists = await Client.findOne({ email });
  if (clientExists) {
    throw new Error("Client already exists");
  }
  const newClient = new Client({ email, fullName, address, carPlateNumber });
  await newClient.save();
  return newClient;
};

const login = async (credentials) => {
  const { email, carPlateNumber } = credentials;
  const client = await Client.findOne({ email, carPlateNumber });

  if (!client) {
    throw new Error("Invalid login credentials");
  }
  return client;
};

module.exports = { register, login };
