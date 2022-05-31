const { Users, Favorites } = require("../models");

class FavoritesServices {
  static async serviceGetFavorites(req) {
    try {
      const favorites = await Favorites.findAll({ where: { authorId: req.params.userId}});
      return favorites;
    } catch (err) {
      console.error(err);
    }
  };
  static async serviceGetOneFav(req, next) {
    try {
      const favorite = await Favorites.findByPk(req.params.id);
      return favorite;
    } catch (err) {
      console.error(err);
    }
  };
  static async serviceSaveFav(req) {
    try {
      const data = await Users.findByPk(req.params.id);
      const user = data[0];
      const favorite = await Favorites.create(req.body);
      favorite.setAuthor(user);
      return favorite;
    } catch (err) {
      console.error(err);
    }
  };
  static async serviceDeleteFav(req) {
    try {
      const user = await Favorites.destroy({ where: { id: req.params.id } });
      return user;
    } catch (err) {
      console.error(err);
    }
  };
}
module.exports = FavoritesServices;
