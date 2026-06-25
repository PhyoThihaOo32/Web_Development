const express = require("express");
const router = express.Router(); 
// mounted at /recipes in api/index.js, which is mounted at /api in app.js — so "/" here is really /api/recipes

let recipes = [
  { id: 1, title: "Spaghetti Carbonara", cuisine: "Italian", minutes: 25, servings: 4, vegetarian: false },
  { id: 2, title: "Chana Masala", cuisine: "Indian", minutes: 35, servings: 4, vegetarian: true },
  { id: 3, title: "Fish Tacos", cuisine: "Mexican", minutes: 20, servings: 3, vegetarian: false },
  { id: 4, title: "Margherita Pizza", cuisine: "Italian", minutes: 40, servings: 2, vegetarian: true },
  { id: 5, title: "Pad Thai", cuisine: "Thai", minutes: 30, servings: 2, vegetarian: false },
];

let nextId = 6;

// route-specific middleware: only runs on the route it's attached to below
function validateRecipe(req, res, next) {
  if (!req.body.title || !req.body.cuisine) {
    return res.sendStatus(400);
  }
  next();
}

router.get("/", (req, res, next) => {
  try {
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const recipe = recipes.find((r) => r.id === Number(req.params.id));
    if (!recipe) {
      return res.sendStatus(404);
    }
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateRecipe, (req, res, next) => { // validateRecipe runs first, then this
  try {
    const newRecipe = {
      id: nextId++,
      title: req.body.title,
      cuisine: req.body.cuisine,
      minutes: req.body.minutes,
      servings: req.body.servings,
      vegetarian: req.body.vegetarian,
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const recipe = recipes.find((r) => r.id === Number(req.params.id));
    if (!recipe) {
      return res.sendStatus(404);
    }
    Object.assign(recipe, req.body); // copies only the sent fields onto the existing recipe
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const index = recipes.findIndex((r) => r.id === Number(req.params.id));
    if (index === -1) {
      return res.sendStatus(404);
    }
    recipes.splice(index, 1);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
