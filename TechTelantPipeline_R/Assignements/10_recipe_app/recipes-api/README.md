# recipes-api-starter

This is the backend for the **Frontend Integration** assignment. It's the same `recipes-api` server from the Middleware assignment, already built and working, so you have a known-good backend to pair with `recipes-frontend-starter`.

## Setup

1. Fork this repository to your own GitHub account.
2. Clone your fork locally: `git clone <your-fork-url>`
3. `cd recipes-api-starter`
4. Install dependencies: `npm install`
5. Start the server: `node app.js` (or `npm run dev` to auto-restart on changes)

**Check it:** Your terminal shows `Server running on port 8080`. Open `http://localhost:8080/api/recipes` in your browser — you should see 5 recipes as JSON.

Leave this running in its own terminal the whole time you work on `recipes-frontend-starter`.

## Routes

- `GET /api/recipes`
- `GET /api/recipes/:id`
- `POST /api/recipes`
- `PATCH /api/recipes/:id`
- `DELETE /api/recipes/:id`
- `GET /api/recipes/:recipeId/reviews`
- `POST /api/recipes/:recipeId/reviews`
- `DELETE /api/reviews/:id`
