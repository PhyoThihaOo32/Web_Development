const express = require("express");
const db = require("./db");
const { User, Task } = require("./models/index");

// import taskRouter
const taskRouter = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(express.json()); // app to read JSON request bodies later

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

// mount it after /api/tasks
app.use("/api/tasks", taskRouter);

async function startApp() {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
}

startApp();
