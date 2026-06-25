const express = require("express");
const router = express.Router();

const recipesRouter = require("./recipes");
const reviewsRouter = require("./reviews");

// order matters: recipesRouter goes first so its own "/:id" claims anything
// matching /recipes/<one segment> (e.g. /recipes/1) before reviewsRouter sees it
router.use("/recipes", recipesRouter);

// recipesRouter only recognizes "/" and "/:id" — anything else under /recipes
// (like /recipes/1/reviews, which has two segments) falls through to this
router.use("/recipes", reviewsRouter);

// same router file as above, mounted again — this time it's reached directly,
// since nothing else is registered under /reviews to claim a request first
router.use("/reviews", reviewsRouter);

module.exports = router;
