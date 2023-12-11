const UserService = require("../services/user-service");
const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: user,
      message: "succesfuly created a user",
      success: true,
      err: {},
    });
  } catch (e) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a user",
      err: e,
    });
  }
};

module.exports = { create };