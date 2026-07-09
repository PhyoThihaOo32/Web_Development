const express = require("express");
const db = require("./db");
const { User, Task } = require("./models/index");

// import taskRouter and userRouter
const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(express.json()); // app to read JSON request bodies later

// middleware
/**
 * Logger (runs on everything). In app.js, write a function logger(req, res, next)
 * that logs the method and URL, then calls next().
 * Register it with app.use(logger) above your routes.
 */
function logger(req, res, next) {
  console.log(`${req.method}: ${req.url}`);
  next();
}

// register logger with app
app.use(logger);

// test health
app.get("/health", (req, res, next) => {
  res.status(200).json({
    status: "ok",
  });
});

// Change the home route GET / to redirect
// to /api/tasks using res.redirect.
app.get("/", (req, res) => {
  res.redirect("/api/tasks");
});

// mount taskRouter
app.use("/api/tasks", taskRouter);
//mount userRouter
app.use("/api/users", userRouter);

/**
 * 404 catch-all. After all your routes (but before the error
 * handler), add an app.use with no path that sends 404.
 * It runs only when no route above it matched.
 */
app.use((req, res) => {
  res.status(404).json({ msg: `request not found` });
});

/**
 * Central error handler. At the very bottom of app.js (after the 404 catch-all),
 * add an error-handling middleware — the one with four parameters
 * (err, req, res, next).
 */
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: `weird error of unknown!` });
});

async function startApp() {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
}

startApp();
