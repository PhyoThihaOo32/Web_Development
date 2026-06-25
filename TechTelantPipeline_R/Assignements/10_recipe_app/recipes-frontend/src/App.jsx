import { useState, useEffect } from "react";
import "./App.css";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

// This is your base URL for your API
const API_URL = "http://localhost:8080";

export default function App() {
  // `recipes` is just a local snapshot — a successful request below won't show up
  // on screen until you also call setRecipes. The server and this state don't auto-sync.
  // AGAIN, the frontend UI state and the server data don't auto-sync - you must do this manually!
  // WHAT DOES THAT MEAN: Just becuase you were able to modify the state/data in the server with the fetch calls, doesn't mean the UI will reflect that automatically.
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // TODO (Part 1): fetch `${API_URL}/api/recipes`, convert the response to JSON, and setRecipes with it
    async function fetchRecipes() {
      const response = await fetch(`${API_URL}/api/recipes`);
      const data = await response.json();
      setRecipes(data);
      console.log(data);
    }
    fetchRecipes();
  }, []);

  function handleAddRecipe(newRecipe) {
    // TODO (Part 2): POST newRecipe to `${API_URL}/api/recipes`, then add the created recipe to `recipes`
  }

  function handleDeleteRecipe(id) {
    // TODO (Part 3): DELETE `${API_URL}/api/recipes/${id}`, then remove that recipe from `recipes`
  }

  function handleToggleVegetarian(id) {
    // TODO (Stretch): PATCH `${API_URL}/api/recipes/${id}` to flip `vegetarian`, then update `recipes`
  }

  return (
    <div id="app">
      <h1>Recipes</h1>
      <RecipeForm onAdd={handleAddRecipe} />
      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
        onToggleVegetarian={handleToggleVegetarian}
      />
    </div>
  );
}
