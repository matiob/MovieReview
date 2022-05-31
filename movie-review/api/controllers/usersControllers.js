const UsersServices = require("../services/usersServices");

class UserControllers{

  static async registerUsers(req, res){
    await UsersServices.serviceResgisterUser(req);
    return res.sendStatus(201);
  };
 
  static async loginUsers(req, res){
    const user = await UsersServices.serviceLogin(req);
    return res.send(user);
  };
  
  static async logOutUsers(req, res){
    req.logOut();
    return res.status(200).send({});
  };
  
  static async getMe (req, res){
    const user = await UsersServices.serviceGetMe(req);
    return user ? res.send(user) : res.sendStatus(401);
  };
 
  static async getUsers(req, res, next){
    const users = await UsersServices.serviceGetUsers();
    return users ? res.send(users).status(200) : res.sendStatus(500);
  };
  
  static async getOneUsers(req, res, next){
    const user = await UsersServices.serviceGetOneUser(req, next);
    return res.send(user);
  };
}
module.exports= UserControllers;