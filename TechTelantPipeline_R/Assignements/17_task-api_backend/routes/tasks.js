/**
 * Make routes/tasks.js. Create an express.Router().
Add five routes on the router:
GET / → all tasks
GET /:id → one task by id (use findByPk)
POST / → create a task from req.body
PATCH /:id → update a task
DELETE /:id → delete a task
Send the right status code each time: 200 read/updated, 201 created, 204 deleted, 404 when the id doesn't exist.
In app.js, mount the router: app.use("/api/tasks", tasksRouter).
Change the home route GET / to redirect to /api/tasks using res.redirect.
 */

const express = require("express");
const taskRouter = express.Router();
const { Task, User } = require("./../models");

// get all tasks
taskRouter.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// get a task
taskRouter.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const task = await Task.findByPk(id, {
      include: User,
    });
    if (!task) return res.sendStatus(204);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

// create a task
taskRouter.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});

// update a task
taskRouter.patch("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const task = await Task.findByPk(id);
    if (!task) return res.sendStatus(404);

    await task.update(req.body);
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

// delete a task
taskRouter.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findByPk(Number(req.params.id));
    if (!task) return res.sendStatus(404);
    await task.destroy();
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = taskRouter;
