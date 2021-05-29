const db = require("../models");
const farmers = db.apiends.farmers;
const utils = require("../../utils/utilityfunction");
const { randomIdGenerator } = require("../../utils/utilityfunction");
const { response } = require("express");

const register = (req, res) => {
  // Validate request
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  var Id = utils.randomIdGenerator("FR");
  const farmer = {
    farmerId: Id,
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
  };
  farmers
    .create(farmer)
    .then((data) => {
      res.send({
        farmerId: Id,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while Registering The Farmer.",
      });
    });
};

const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  farmers
    .findOne({
      where: { email: req.body.email, password: req.body.password },
    })
    .then((farmer) => {
      if (response) {
        res.send({
          status: true,
        });
      } else {
        res.send({
          status: false,
        });
      }
    });
};

module.exports = {
  register: register,
  login: login,
};
