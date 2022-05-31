const axios = require("axios");
const apiKey = process.env.API_KEY

class ShowsServices {
  static async serviceGetPopulars() {
    try {
      const populars = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?${apiKey}&sort_by=popularity.desc`
      );
      return populars;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetUpcoming() {
    try {
      const upcoming = await axios.get(
        `https://api.themoviedb.org/3/tv/upcoming?${apiKey}&language=en-US&page=1`
      );
      return upcoming;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetOneShow(req, next) {
    try {
      const show = await axios.get(
        `https://api.themoviedb.org/3/tv/${req.params.id}?${apiKey}`
      );
      return show;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetByGener(req, next) {
    try {
      const shows = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?${apiKey}&with_genres=${req.params.id}`
      );
      return shows;
    } catch (err) {
      console.error(err);
    }
  }
  static async serviceGetSearch(req, next) {
    try {
      const shows = await axios.get(
        `https://api.themoviedb.org/3/search/tv?apiKey=${apiKey}&query=${req.body}`
      );
      return shows;
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = ShowsServices;
