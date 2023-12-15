const express = require("express");
const app = express();
const { PORT } = require("./config/server-config");
const apiRouter = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserService = require("./services/user-service");
const userService = new UserService();

const { User, Role } = require("./models/index.js");
const db = require("./models/index");

const prepareAndStartServer = async () => {
  app.use("/api", apiRouter);

  if (process.env.DB_SYNC == 1) {
    console.log("db sync");
    db.sequelize.sync({ alter: true });
  }

  app.listen(PORT, (e) => {
    if (e) {
      console.log("error in starting server");
    } else {
      console.log("server started on port", PORT);
    }
  });
};

prepareAndStartServer();
