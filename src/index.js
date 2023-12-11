const express = require("express");
const app = express();
const { PORT } = require("./config/server-config");
const apiRouter = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prepareAndStartServer = () => {
  app.use("/api", apiRouter);

  app.listen(PORT, (e) => {
    if (e) {
      console.log("error in starting server");
    } else {
      console.log("server started on port", PORT);
    }
  });
};

prepareAndStartServer();
