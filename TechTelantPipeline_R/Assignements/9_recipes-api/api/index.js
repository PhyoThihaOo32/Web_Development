// const router = require("express").Router();
// const recipesRouter = require("./recipes");

// router.use("/recipes", recipesRouter);
// module.exports = router;

const mainRouter = require("express").Router();
const recipeRouter = require("./recipes");
const reviewRouter = require("./reviews");

// mout the router
mainRouter.use("/recipes", recipeRouter);
mainRouter.use("/recipes", reviewRouter);

module.exports = mainRouter;
