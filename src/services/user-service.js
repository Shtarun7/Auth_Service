const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/server-config");
const bcrypt = require("bcryptjs");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (e) {
      console.log("error::user-service:create");
      throw e;
    }
  }
  async signIn(email, password) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (!user || (user && !this.checkPassword(password, user.password)))
        throw "User not exists or password incorrect";

      const token = this.createToken({ email: user.email, id: user.id });
      return token;
    } catch (e) {
      console.log("error::user-service:signin");
      throw e;
    }
  }
  createToken(user) {
    try {
      const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1d" });
      return token;
    } catch (e) {
      console.log("error::user-service:generate token");
      throw e;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_SECRET);
      return response;
    } catch (e) {
      console.log("error::user-service:verify token");
      throw e;
    }
  }

  checkPassword(password, hash) {
    try {
      return bcrypt.compareSync(password, hash);
    } catch (e) {
      console.log("error::user-service:checkpassword");
      throw e;
    }
  }
  async getById(userId) {
    try {
      const user = await this.userRepository.getById(userId);
      return user;
    } catch (e) {
      console.log("error::user-service:get by id");
      throw e;
    }
  }
}
module.exports = UserService;
