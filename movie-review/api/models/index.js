const Users = require("./Users");
const Favorites = require("./Favorites");

Favorites.belongsTo(Users, { as: "author"});

module.exports = { Users, Favorites };