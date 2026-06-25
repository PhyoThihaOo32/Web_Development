# recipes-frontend-starter

This is the starter for the **Frontend Integration** assignment. The components are already built — your job is to fill in the `fetch` calls that connect them to your `recipes-api-starter` backend.

## Setup

1. Fork this repository to your own GitHub account.
2. Clone your fork locally: `git clone <your-fork-url>`
3. `cd recipes-frontend-starter`
4. Install dependencies: `npm install`
5. Start the dev server: `npm run dev`, then open the URL it gives you (probably `http://localhost:5173`)

**Check it:** Your browser shows "Recipes" with an empty list, an "Add Recipe" form, and no console errors.

Before you write any code, make sure `recipes-api-starter` is running on `http://localhost:8080` in its own terminal — this app has nothing to talk to without it.

## What's Already Built

- `src/components/RecipeForm.jsx` — a working form. Submitting it calls `onAdd`.
- `src/components/RecipeList.jsx` / `RecipeCard.jsx` — render each recipe with **Delete** and **Toggle Vegetarian** buttons, calling `onDelete` / `onToggleVegetarian`.

## What You're Building

Open `src/App.jsx`. Everything you need to do lives in four spots marked `// TODO`:

- A `useEffect` that loads the recipe list on page load
- `handleAddRecipe` — sends a new recipe to the server
- `handleDeleteRecipe` — removes a recipe from the server
- `handleToggleVegetarian` — flips a recipe's `vegetarian` value (stretch)
