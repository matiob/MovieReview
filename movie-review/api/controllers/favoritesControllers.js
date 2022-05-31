const FavoritesServices = require("../services/favoritesServices");

class FavoritesControllers {
  static async getFavorites(req, res, next) {
    const favorites = await FavoritesServices.serviceGetFavorites(req);
    return favorites ? res.status(200).json(favorites) : res.sendStatus(404);
  };
  static async getOneFavorite(req, res, next) {
    const favorite = await FavoritesServices.serviceGetOneFav(req, next);
    return favorite ? res.status(200).json(favorite) : res.sendStatus(404);
  };
  static async savefavorites(req, res) {
    const favorite = await FavoritesServices.serviceSaveFav(req);
    return res.status(201).send(favorite);
  };
  static async deletefavorite(req, res, next) {
    const result = await FavoritesServices.serviceDeleteFav(req, next);
    result
      ? res.status(204).send({})
      : res.status(404).send("The favorite you want to delete doesn't exist.");
  };
}
module.exports = FavoritesControllers;
