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

// part2  fist route
app.get("/", (req, res) => res.send("Books API is running"));

// part3 get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// part4 get one book by id
app.get("/api/books/:id", (req, res) => {
  const id = Number(req.params.id); // 4
  //   console.log(id);
  const newBook = books.filter((book) => book.id === id);
  if (newBook.length > 0) {
    res.json(newBook);
  } else {
    return res.status(404).json({ error: "Not Found!" });
  }
});

// part5 post a new book
app.post("/api/books", (req, res) => {
  const { title, author, genre } = req.body;

  const newBook = {
    id: nextId,
    title,
    author,
    genre,
    available: true,
  };

  nextId++;
  books.push(newBook);
  res.sendStatus(201).json(newBook);
});

// part6 patch an existing book
app.patch("/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  

});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
