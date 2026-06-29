// seed.js — populates the Books table with sample data, then exits.
// Run with: node seed.js
//
// This depends on Parts 1 (db connection) and 2 (Book model) already being
// wired up — there's nothing to insert into until those exist.

const db = require("./db");
const Book = require("./models/book");

const books = [
  { title: "The Pragmatic Programmer", author: "David Thomas", genre: "Tech", publishedYear: 1999, available: true },
  { title: "Educated", author: "Tara Westover", genre: "Memoir", publishedYear: 2018, available: true },
  { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", publishedYear: 1965, available: false },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", publishedYear: 2011, available: true },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", publishedYear: 1988, available: true },
];

async function seed() {
  // force: true drops and recreates the table every run — only ever do this
  // here, in a seed script, never in app.js's normal startup.
  await db.sync({ force: true });

  await Book.bulkCreate(books);

  console.log(`Seeded ${books.length} books.`);
  process.exit();
}

seed();
