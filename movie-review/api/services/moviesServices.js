const axios = require("axios");
const apiKey = process.env.API_KEY

console.log("API-KEY->", apiKey);

class MoviesServices {
  static async serviceGetPopulars() {
    try {
      const populars = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?${apiKey}&sort_by=popularity.desc`
      );
      return populars;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetUpcoming() {
    try {
      const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=1`
      );
      return upcoming;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetOneMovie(req, next) {
    try {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${req.params.id}?${apiKey}`
      );
      return movie;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetByGener(req, next) {
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=${req.params.id}`
      );
      return movies;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetSearch(req, next) {
    console.log("service");
    try {
      const movies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?apiKey=${apiKey}&query=${req.body}`
      );
      console.log("MOVIES->", movies);
      return movies;
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = MoviesServices;
