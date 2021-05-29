const db = require("../models");
const products = db.apiends.products;
const buyers = db.apiends.buyers;
const dbConfig = require("../config/db.config.env");
const utils = require("../../utils/utilityfunction");
const Sequelize = require("sequelize");

const showAll = (req, res) => {
  products
    .findAll()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Some error occured",
      });
    });
};

const findByBuyer = (req, res) => {
  if (!req.body.buyerid) {
    res.send({
      message: "require a buyer id",
    });
    return;
  }
  products
    .findAll({
      where: { buyerid: req.body.buyerid },
    })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Some error occured",
      });
    });
};

const productDetail = (req, res) => {
  if (!req.body.productId) {
    res.status(400).send({
      message: "Need A Product Id!",
    });
    return;
  }
  products
    .findOne({
      where: { productId: req.body.productId },
    })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.status(400).send({
        message: "Invalid Product Id",
      });
      return;
    });
};

const addProduct = (req, res) => {
  if (!req.body.adminPassword) {
    res.status(400).send({
      message: "Need An Admin Password!",
    });
    return;
  }
  if (req.body.adminPassword != dbConfig.ADMINPASSWORD) {
    res.status(400).send({
      message: "Wrong Admin Password!",
    });
    return;
  }
  var nameval = req.body.name;
  var priceval = req.body.price;
  var chefid = req.body.chefid;

  if (!nameval || !priceval || !chefid) {
    res.status(400).send({
      message: "Empty Details Of Products!",
    });
    return;
  }

  const Id = utils.randomIdGenerator("PD");

  var product = {
    productId: Id,
    name: nameval,
    price: priceval,
    buyerid: buyerid,
  };

  products
    .create(product)
    .then((response) => {
      res.json({
        message: "Inserted Successfully To Products Table",
      });
    })
    .catch((err) => {
      res.json({
        message: "Insertion To Products Table Failed",
      });
    });
};

module.exports = {
  productDetail: productDetail,
  addProduct: addProduct,
  showAll: showAll,
  findByBuyer: findByBuyer,
};
