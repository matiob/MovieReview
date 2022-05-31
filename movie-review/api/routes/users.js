const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("../controllers/usersControllers");

//RUTA PARA REGISTRAR UN USUARIO
router.post("/register", UserController.registerUsers);
//RUTA PARA LOGIN
router.post("/login", passport.authenticate("local"), UserController.loginUsers);
//RUTA PARA LOGOUT
router.post("/logout", UserController.logOutUsers);
//RUTA PARA DEVOLVER USUARIO LOGUEADO
router.get("/me", UserController.getMe);
//RUTA PARA VER TODOS LOS USUARIOS
router.get("/", UserController.getUsers);
//RUTA PARA VER UN USUARIO PARTICULAR
router.get("/:id", UserController.getOneUsers);

module.exports = router;