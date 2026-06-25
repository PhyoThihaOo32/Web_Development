const recipeRouter = require("express").Router();

let recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    minutes: 25,
    servings: 4,
    vegetarian: false,
  },
  {
    id: 2,
    title: "Chana Masala",
    cuisine: "Indian",
    minutes: 35,
    servings: 4,
    vegetarian: true,
  },
  {
    id: 3,
    title: "Fish Tacos",
    cuisine: "Mexican",
    minutes: 20,
    servings: 3,
    vegetarian: false,
  },
  {
    id: 4,
    title: "Margherita Pizza",
    cuisine: "Italian",
    minutes: 40,
    servings: 2,
    vegetarian: true,
  },
  {
    id: 5,
    title: "Pad Thai",
    cuisine: "Thai",
    minutes: 30,
    servings: 2,
    vegetarian: false,
  },
];

let nextId = 6;

// middleware checks req.body for title and cuisine. If either is missing, send status 400 and return — don't call next()
const checkReqBody = (req, res, next) => {
  if (!req.body.title || !req.body.cuisine)
    return res
      .status(400)
      .json({ message: `missing title and cuisine in request body` });
  next();
};

// get all recipes
recipeRouter.get("/", (req, res) => {
  console.log("Getting all recipes!");
  res.json(recipes);
});

// get a specific recipe
recipeRouter.get("/:id", (req, res, next) => {
  try {
    console.log("Getting a specific recipe.");
    const id = Number(req.params.id);
    const user_recipe = recipes.find((recipe) => recipe.id === id);
    if (!user_recipe)
      return res.status(404).json({ message: `recipe id:${id} not found` });

    res.status(200).json(user_recipe);
  } catch (error) {
    next(error);
  }
});

// create a recipe
recipeRouter.post("/", checkReqBody, (req, res, next) => {
  try {
    // console.log(req.body);
    const { title, cuisine, minutes, serving } = req.body;
    const newRecipe = {
      id: nextId++,
      title,
      cuisine,
      minutes,
      serving,
      vegetarian: false,
    };
    recipes.push(newRecipe);
    res.status(201).json(recipes);
  } catch (error) {
    next(error);
  }
});

// update the existing recipe
recipeRouter.put("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const currRecipe = recipes.find((recipe) => recipe.id === id);
    if (!currRecipe)
      // should i throw error in this line instead of return?
      return res.status(404).json({ message: `Recipe ${id} not found.` });
    // update the currRecipe with the data from the req.body
    Object.assign(currRecipe, req.body);
    res.status(200).json(currRecipe);
  } catch (error) {
    next(error);
  }
});

// delete a recipe
recipeRouter.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const currRecipe = recipes.find((recipe) => recipe.id === id);
    if (!currRecipe)
      return res.status(404).json({ message: ` Recipe ${id} not found.` });
    recipes = recipes.filter((recipe) => recipe.id !== id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = recipeRouter;
