const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/productsController.controller");

router.get("/", AuthController.showAll);
router.post("/addProduct", AuthController.addProduct);
router.post("/bybuyerid", AuthController.findByBuyer);

module.exports = router;
