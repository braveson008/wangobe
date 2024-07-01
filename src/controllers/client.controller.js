// Services
const clientService = require("../services/client.service");

const { register, login } = clientService;

const registerClient = async (req, res) => {
  const { email, fullName, address, carPlateNumber } = req.body;
  try {
    const newClient = await register({
      email,
      fullName,
      address,
      carPlateNumber,
    });
    res.status(200).send(newClient);
  } catch (err) {
    res.status(500).send(`Register Client - Server error, ${err}`);
  }
};

const loginClient = async (req, res) => {
  const { email, carPlateNumber } = req.body;
  try {
    const client = await login({ email, carPlateNumber });
    res.status(200).json({ msg: "Login successful", clientId: client._id });
  } catch (err) {
    res.status(500).send(`Log in client - Server error, ${err}`);
  }
};

module.exports = {
  loginClient,
  registerClient,
};
