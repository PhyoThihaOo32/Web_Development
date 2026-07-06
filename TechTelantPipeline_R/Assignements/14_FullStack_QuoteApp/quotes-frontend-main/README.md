# Quotes Frontend

React starter for the Full-Stack Workshop (Assignment 12).

This app talks to the `quotes-backend` Express server over HTTP — the same way Postman did all week. Your job is to connect three buttons to three backend routes by writing the fetch calls inside `src/App.jsx`.

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite gives you (usually `http://localhost:5173`).

**You need the backend running at the same time.** Open a second terminal, go into `quotes-backend`, and start that server first. See the full instructions in the assignment doc.

## What's already here

- `src/App.jsx` — the full UI (three sections with inputs and buttons). Look for the three `async function` placeholders with step-by-step comments — those are your tasks.
- `src/App.css` — styling, already done.
- `src/index.css` — global variables and base styles, don't touch.

## What you write

Three fetch functions inside `App.jsx`:
- `loadQuotes()` — GET all quotes and show them in the list
- `handleCreate()` — POST a new quote from the form inputs
- `handleDelete()` — DELETE a quote by id

Full instructions: see the assignment doc linked in the course README.
