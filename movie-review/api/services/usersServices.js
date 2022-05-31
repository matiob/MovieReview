const { Users } = require("../models");

class UsersServices {
  static async serviceResgisterUser(req) {
    try {
      const res = await Users.create(req.body);
      const data = res.dataValues;
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  static async serviceLogin(req) {
    try {
      const user = await Users.findOne({
        where: { email: req.body.email },
        attributes: {
          exclude: ["password", "salt"],
        },
      });
      return user;
    } catch (err) {
      console.error(err);
    }
  };

  static async serviceGetMe(req) {
    try {
      return req.user ? req.user : null;
    } catch (err) {
      console.error(err);
    }
  };

  static async serviceGetUsers(){
    try {
      const users = await Users.findAll();
      return users;
    } catch (err) {
      console.error(err);
    }
  };

  static async serviceGetOneUser(req, next){
    try {
      const user = await Users.findOne({
        where: {
          id: req.params.id,
        },
      });
      return user;
    } catch (err) {
      console.error(err);
    }
  };
}
module.exports = UsersServices;
