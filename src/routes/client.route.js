// System
const express = require("express");

// Config
const router = express.Router();

// Controllers
const clientController = require("../controllers/client.controller");

const { registerClient, loginClient } = clientController;

router.post("/login", loginClient);
router.post("/register", registerClient);

module.exports = router;
