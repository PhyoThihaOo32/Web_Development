// const express = require("express");
import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

// init express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger); // logger middleware
app.use("/api/posts", posts); // ROUTES
app.use(notFound);

app.use(errorHandler); // error handling

// start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
