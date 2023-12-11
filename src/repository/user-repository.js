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
  async destroy(userId) {
    try {
      await User.destroy({ where: { id: userId } });
      return true;
    } catch (e) {
      console.log("error::user-repository:destroy");
      throw e;
    }
  }
}

module.exports = UserRepository;
