// System
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

// Route definitions
const cityRoutes = require("./src/routes/city.route");
const clientRoutes = require("./src/routes/client.route");
const parkingRoutes = require("./src/routes/parking.route");

// Config
const app = express();
const connectDB = require("./src/config/db");

connectDB();
dotenv.config();

const port = process.env.SERVER_PORT;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/cities", cityRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/parking", parkingRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
