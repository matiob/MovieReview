const express = require("express");
const router = express.Router();
const MoviesControllers = require("../controllers/moviesControllers");

//GET POPULAR
router.get("/popular", MoviesControllers.getPopulars);
//GET UPCOMING
router.get("/upcoming", MoviesControllers.getUpcoming);
//GET ONE MOVIE
router.get("/:id", MoviesControllers.getMovie);
//GET BY GENER
router.get("/gener/:id", MoviesControllers.getByGener);
//GET SEARCH
router.get("/search", MoviesControllers.getSearch);

module.exports = router;