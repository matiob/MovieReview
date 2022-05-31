const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies");
const showsRouter = require("./shows");
const usersRouter = require("./users");
const favoriteRouter = require("./favorites");

router.use("/users", usersRouter);
router.use("/movies", moviesRouter);
router.use("/shows", showsRouter);
router.use("/favorites", favoriteRouter);

module.exports = router;