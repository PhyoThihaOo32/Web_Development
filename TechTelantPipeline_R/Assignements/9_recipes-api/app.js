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
const PORT = 3000;

const express = require("express");
const app = express();
app.use(express.json());

// get all recipes
app.get("/api/recipes", (req, res) => {
  console.log("Getting all recipes!");
  res.json(recipes);
});

// get a specific recipe
app.get("/api/recipes/:id", (req, res) => {
  console.log("Getting a specific recipe.");
  const id = Number(req.params.id);
  const user_recipe = recipes.find((recipe) => recipe.id === id);
  if (!user_recipe) {
    return res.status(404).json({ message: `recipe id:${id} not found` });
  }
  res.status(200).json(user_recipe);
});

// create a recipe
app.post("/api/recipes", (req, res) => {
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
});

// update the existing recipe
app.put("/api/recipes/:id", (req, res) => {
  console.log("Updating Recipe");
  const id = Number(req.params.id);
  const currRecipe = recipes.find((recipe) => recipe.id === id);
  if (!currRecipe)
    return res.status(404).json({ message: `Recipe ${id} not found.` });
  // update the currRecipe with the data from the req.body
  Object.assign(currRecipe, req.body);
  res.status(200).json(currRecipe);
});

// delete a recipe
app.delete("/api/recipes/:id", (req, res) => {
  const id = Number(req.params.id);
  const currRecipe = recipes.find((recipe) => recipe.id === id);
  if (!currRecipe)
    return res.status(404).json({ message: ` Recipe ${id} not found.` });
  recipes = recipes.filter((recipe) => recipe.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server now running on port ${PORT}`);
});
