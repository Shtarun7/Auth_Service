const express = require("express");
const app = express();
const { PORT } = require("./config/server-config");
const prepareAndStartServer = () => {
  app.listen(PORT, (e) => {
    if (e) {
      console.log("error in starting server");
    } else {
      console.log("server started on port", PORT);
    }
  });
};

prepareAndStartServer();
