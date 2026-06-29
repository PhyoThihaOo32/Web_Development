# Books API Starter

Starter repo for **Assignment 10: Sequelize (ORM) — Books API + Database**.

This already includes a working Express CRUD API for books (the same five routes from Assignment 08), backed by a plain in-memory array. Your job today is to replace that array with a real PostgreSQL database, using Sequelize.

## Before you start

- [ ] PostgreSQL needs to be installed and running on your machine, with a tool to connect to it (pgAdmin or Postico). If you haven't done this yet, follow the **PostgreSQL** section of the [setup guide](https://github.com/aghaffar570/ttp-summer-2026/blob/main/setup.md).
- [ ] Full step-by-step instructions, hints, and "Explain" questions are in the assignment doc: **[Sequelize.md](https://github.com/aghaffar570/ttp-summer-2026/blob/main/assignments/Sequelize.md)** — that's the source of truth, not this README.

## Quick start

```bash
npm install
npm install sequelize pg pg-hstore
```

Then, using pgAdmin or Postico, create a database named `books_api`.

## Where to look

Three files already have `// Workshop Part ...` comments marking exactly what to do and where:

- `db/index.js` — Part 1, your Sequelize connection
- `models/book.js` — Part 2, your `Book` model fields
- `app.js` — Part 3 (syncing the table) and Part 4 (replacing each route's in-memory logic)

Everything else (middleware, the in-memory data, route shapes) is already done — don't rebuild it, just swap out what each `Workshop` comment points at.

## Stuck?

Check the **Common Gotchas** and **Resources** sections in [Sequelize.md](https://github.com/aghaffar570/ttp-summer-2026/blob/main/assignments/Sequelize.md) before asking — most issues (forgotten `await`, a `null` result, a sync that ran too early) are covered there.
