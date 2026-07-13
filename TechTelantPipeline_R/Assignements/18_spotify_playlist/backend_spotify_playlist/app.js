const express = require("express");
const db = require("./db");
const { Playlist, Songs } = require("./models");
const router = require("./routes");

const PORT = 8000;
const app = express();
app.use(express.json());

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
