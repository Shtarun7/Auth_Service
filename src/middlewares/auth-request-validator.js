const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      message: "email or pass missing",
      data: {},
      err: "Email or password missing",
    });
  }
  next();
};

module.exports = { validateUserAuth };
