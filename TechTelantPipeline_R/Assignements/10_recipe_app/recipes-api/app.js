const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const apiRouter = require("./api");

const app = express();

app.use(express.json()); // parses JSON bodies into req.body
app.use(morgan("dev")); // logs every request to the terminal
app.use(cors()); // allows a frontend on a different port to make requests here

app.use("/api", apiRouter); // every route below lives under /api

// 4 params (not 3) is how Express knows this is the error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(8080, () => console.log("Server running on port 8080"));
