// middleware function that logs the request's method and URL (req.method, req.originalUrl) to the console.
const logger = (req, res, next) => {
  console.log(`Logging: ${req.method}: ${req.originalUrl}`);
  next();
};

const PORT = 3000;
const express = require("express");
const router = require("./api/index.js");

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api", router);

// middleware
app.use((err, req, res, next) => {
  console.log("Error Message: ", err.message);
  res.status(500).json({ text: `You made a error!`, message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server now running on port ${PORT}`);
});
