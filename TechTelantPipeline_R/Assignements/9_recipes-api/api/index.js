// const router = require("express").Router();
// const recipesRouter = require("./recipes");

// router.use("/recipes", recipesRouter);
// module.exports = router;

const router = require("express").Router();
const recipeRouter = require("./recipes");

// mout the router
router.use("/recipes", recipeRouter);

module.exports = router;
