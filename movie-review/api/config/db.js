const Sequelize = require("sequelize");
const db = new Sequelize("sw_tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
module.exports = db;