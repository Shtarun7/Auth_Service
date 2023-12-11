const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (e) {
      console.log("error::user-repository:create");
      throw e;
    }
  }
  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (e) {
      console.log("error::user-repository:get user by id");
      throw e;
    }
  }
  async destroy(userId) {
    try {
      await User.destroy({ where: { id: userId } });
      return true;
    } catch (e) {
      console.log("error::user-repository:destroy");
      throw e;
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (e) {
      console.log("error::user-repository:get by email");
      throw e;
    }
  }
}

module.exports = UserRepository;
