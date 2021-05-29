const db = require("../models");
const buyers = db.apiends.buyers;
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
  var Id = utils.randomIdGenerator("BU");
  const buyer = {
    buyerId: Id,
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    email: req.body.email,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    address: req.body.address,
  };
  buyers
    .create(buyer)
    .then((data) => {
      res.send({
        status: true,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while Registering.",
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
  buyers
    .findOne({
      where: { email: req.body.email, password: req.body.password },
    })
    .then((user) => {
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

function solve(latitude, longitude, coords1) {
  var coords2 = [];
  coords2.push(longitude);
  coords2.push(latitude);
  var x = utils.haversineDistance(coords1, coords2);

  if (x <= 15) return true;
  else return false;
}
const nearByBuyers = (req, res) => {
  var lat = req.body.latitude;
  var long = req.body.longitude;
  if (!lat || !long) {
    res.send({
      message: "Error in inputs",
    });
    return;
  }
  var coords1 = [];
  coords1.push(long);
  coords1.push(lat);

  buyers
    .findAll({})
    .then((response) => {
      var ans = [];
      for (i = 0; i < response.length; i++) {
        if (solve(response[i].latitude, response[i].longitude, coords1))
          ans.push(response[i]);
      }
      res.send({
        ans,
      });
    })
    .catch({
      message: "Error in retrieving data",
    });
};

module.exports = {
  register: register,
  login: login,
  nearByBuyers: nearByBuyers,
};
