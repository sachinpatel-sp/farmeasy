const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/buyerController.controller");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/nearByBuyer", AuthController.nearByBuyers);

module.exports = router;
