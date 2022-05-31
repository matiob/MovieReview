const Sequelize = require("sequelize");
const db = require("../config/db");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    idApi: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    year: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
