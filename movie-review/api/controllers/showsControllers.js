const ShowsServices = require("../services/showsServices");

class ShowsControllers {
  static async getPopulars(req, res, next) {
    const populars = await ShowsServices.serviceGetPopulars();
    return populars ? res.status(200).json(populars) : res.sendStatus(404);
  };
  static async getUpcoming(req, res, next) {
    const upcoming = await ShowsServices.serviceGetUpcoming(req, next);
    return upcoming ? res.status(200).json(upcoming) : res.sendStatus(404);
  };
  static async getShow(req, res) {
    const show = await ShowsServices.serviceGetOneShow(req);
    return show ? res.status(200).json(show) : res.sendStatus(404);
  };
  static async getByGener(req, res, next) {
    const shows = await ShowsServices.serviceGetByGener(req);
    return shows ? res.status(200).json(shows) : res.sendStatus(404);
  };
  static async getSearch(req, res, next) {
    const shows = await ShowsServices.serviceGetSearch(req);
    return shows ? res.status(200).json(shows) : res.sendStatus(404);
  };
}
module.exports = ShowsControllers;