const express = require("express");
require("dotenv").config();
const db = require("./db");
const cors = require("cors");
const { Playlist, Songs } = require("./models");
const router = require("./routes");

const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors()); // backend accept requests from a different website/app addres in this case react

// mount the routers
app.use("/api", router);

// error handler
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({
    message: error.message || `Internal Server Error.`,
  });
});

async function startApp() {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
  });
}

startApp();
