# Quotes Backend

Express + Sequelize starter for the Full-Stack Workshop (Assignment 12).

This is the API server the React frontend talks to. Your job is to wire up the database connection, define the Quote model, and complete three Express routes.

## Before you start

1. Create a database named `quotes` in Postico or pgAdmin
2. Install Sequelize: `npm install sequelize pg pg-hstore`

## Setup

```bash
npm install
node app.js
```

You should see: `Server running on port 8080`

## File structure

```
quotes-backend/
├── app.js           ← Express server + three routes (your tasks are here)
├── db/
│   └── index.js     ← Sequelize connection (write this first)
└── models/
    └── Quote.js     ← Quote model (write this second)
```

Each file has comments walking you through exactly what to write. Complete them in order: `db/index.js` → `models/Quote.js` → `app.js`.

## What you write

- `db/index.js` — connect Sequelize to your `quotes` database
- `models/Quote.js` — define the Quote model (text, author)
- `app.js` — complete the body of three route handlers: GET all, POST create, DELETE by id

Full instructions: see the assignment doc linked in the course README.

## Seed the database (optional)

Once `db/index.js` and `models/Quote.js` are complete, you can populate the database with sample quotes instead of creating them manually through Postman:

```bash
node seed.js
```

This drops and recreates the `Quotes` table, then inserts 3 starter quotes. Only run it after the connection and model are wired up — the seed depends on both.
