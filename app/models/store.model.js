module.exports = (sequelize, Sequelize) => {
  const buyers = sequelize.define("buyers", {
    buyerid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    buyername: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.DOUBLE,
    },
    longitude: {
      type: Sequelize.DOUBLE,
    },
    Address: {
      type: Sequelize.STRING,
    },
    chefImage: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.INTEGER,
    },
  });

  const products = sequelize.define("products", {
    productId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    chefid: {
      type: Sequelize.STRING,
      references: {
        model: "buyers",
        key: "buyerid",
      },
    },
  });
  const farmers = sequelize.define(
    "farmers",
    {
      farmerId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: true }
  );

  module = {};
  module.farmers = farmers;
  module.products = products;
  module.buyers = buyers;
  return module;
};
