const express = require("express");
const cors = require("cors");
const { db } = require("./models");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

const PORT = 8000;

async function logger(req, res, next) {
  await console.log("Checking request method", req.method, req.originalUrl);
  next();
}
async function startApp() {
  await db.sync();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
startApp();
