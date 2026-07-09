const express = require("express");
const db = require("./db");
const { User, Task } = require("./models/index");

// import taskRouter and userRouter
const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

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

// mount taskRouter
app.use("/api/tasks", taskRouter);
//mount userRouter
app.use("/api/users", userRouter);

async function startApp() {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
}

startApp();
