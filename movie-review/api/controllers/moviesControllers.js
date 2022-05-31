const MoviesServices = require("../services/moviesServices");

class MoviesControllers {
  static async getPopulars(req, res, next) {
    const populars = await MoviesServices.serviceGetPopulars();
    return populars ? res.status(200).json(populars) : res.sendStatus(404);
  };
  static async getUpcoming(req, res, next) {
    const upcoming = await MoviesServices.serviceGetUpcoming(req, next);
    return upcoming ? res.status(200).json(upcoming) : res.sendStatus(404);
  };
  static async getMovie(req, res) {
    const movie = await MoviesServices.serviceGetOneMovie(req);
    return movie ? res.status(200).json(movie) : res.sendStatus(404);
  };
  static async getByGener(req, res, next) {
    const movies = await MoviesServices.serviceGetByGener(req);
    return movies ? res.status(200).json(movies) : res.sendStatus(404);
  };
  static async getSearch(req, res, next) {
    console.log("controller");
    const movies = await MoviesServices.serviceGetSearch(req);
    return movies ? res.status(200).json(movies) : res.sendStatus(404);
  };
}
module.exports = MoviesControllers;