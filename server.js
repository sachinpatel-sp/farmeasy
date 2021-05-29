const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to The Store application." });
});

const productRoute = require("./app/routes/productRoute.route");
const farmerRoute = require("./app/routes/farmerRoute.route");
const buyerRoute = require("./app/routes/buyerRoute.route");

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use("/farmer", farmerRoute);
app.use("/product", productRoute);
app.use("/buyer", buyerRoute);  