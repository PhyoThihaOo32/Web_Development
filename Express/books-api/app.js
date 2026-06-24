let books = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    genre: "Tech",
    available: true,
  },
  {
    id: 2,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    available: true,
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    available: false,
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    available: true,
  },
  {
    id: 5,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    available: true,
  },
];

let nextId = 6; // use this for any new book you create

const express = require("express");
const app = express(); // create the app
app.use(express.json());

// route
// method - path - handler

// part2  fist route
app.get("/", (req, res) => res.send("Books API is running"));

// part3 get all books
app.get("/api/books", (req, res) => {
  console.log("Getting All Books!");
  res.json(books);
});

// part4 get one book by id
app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id); // req.params.id return string
  //   console.log(id);
  const newBook = books.find((book) => book.id === id);
  if (!newBook) {
    return res.status(404).json({ message: `book id ${id} not found` });
  }
  res.status(200).json(newBook);
});

// part5 post a new book
app.post("/api/books", (req, res) => {
  const { title, author, genre } = req.body;
  const newBook = {
    id: nextId++,
    title,
    author,
    genre,
    available: true,
  };

  books.push(newBook);
  res.status(201).json(books);
});

// part6 patch an existing book
app.patch("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const newBook = books.find((book) => book.id === id);
  if (!newBook)
    return res.status(404).json({ message: `Book not found by id ${id}` });
  Object.assign(newBook, req.body); // update the book with req.body
  res.status(200).json(newBook);
});

// part 7 delete a book
app.delete("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const del_book = books.find((book) => book.id === id);
  if (!del_book)
    return res.status(404).json({ message: `book id ${id} not found` });

  books = books.filter((book) => book.id !== id);
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log("Server is Running on port 8080");
});
