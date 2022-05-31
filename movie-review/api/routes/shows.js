const express = require("express");
const router = express.Router();
const ShowsControllers = require("../controllers/showsControllers");

//GET POPULAR
router.get("/popular", ShowsControllers.getPopulars);
//GET UPCOMING
router.get("/upcoming", ShowsControllers.getUpcoming);
//GET ONE SHOW
router.get("/:id", ShowsControllers.getShow);
//GET BY GENER
router.get("/gener/:id", ShowsControllers.getByGener);
//GET SEARCH
router.get("/search", ShowsControllers.getSearch);

module.exports = router;