const express = require("express");
const router = express.Router();
const FavoritesControllers = require("../controllers/favoritesControllers");

//GET ALL FAVORITES
router.get("/:userId", FavoritesControllers.getFavorites);
//GET ONE FAVORITE
router.get("/one/:id", FavoritesControllers.getOneFavorite);
//SAVE FAVORITE
router.post("/:id", FavoritesControllers.savefavorites);
//DELETE FAVORITE
router.delete("/:id", FavoritesControllers.deletefavorite);

module.exports = router;
