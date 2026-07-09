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

/**
 *
 * Goal: Let the client filter the task list with query strings.
 * This is how every search bar and filter in your capstone gets built on the backend.
 * We want three filters on GET /api/tasks:
 * ?search=review → tasks whose title contains "review"
 * ?status=todo → tasks with an exact status
 * ?minPriority=2 → tasks with priority ≥ 2
 * Steps
 * In routes/tasks.js, import Op from Sequelize.
 * In the GET / route, read search, status, and minPriority from req.query.
 * Build up a where object, adding a condition only for the filters that were actually passed:
 * exact match for status → where.status = status
 * "contains" for search → Op.iLike with %value%
 * "greater than or equal" for minPriority → Op.gte
 * Pass { where } to findAll.
 * Test each filter in Postman, and combinations like ?status=todo&minPriority=2.
 */

const express = require("express");
const taskRouter = express.Router();
const { Task, User } = require("./../models");
// import OP from sequelize
// import { Op } from "@sequelize/core"; -> give me error LOL // "type" :"module"

const { Sequelize, Op } = require("sequelize");

/**
 * Route-specific validation. In routes/tasks.js,
 * write requireTitle(req, res, next) that sends 400
 * if req.body.title is missing, otherwise calls next().
 * Add it as an extra argument on the POST route,
 * before the handler.
 */
function requireTitle(req, res, next) {
  const { title } = req.body;
  if (!title)
    return res.status(400).json({ mes: `missing title in request body.` });
  next();
}

// get all tasks - query -> filtering
taskRouter.get("/", async (req, res, next) => {
  try {
    // const { search, status, minPriority } = req.query;
    // if (search || status) {
    //   const task = await Task.findAll({
    //     where: {
    //       title: {
    //         [Op.iLike]: `%${search}%`,
    //       },
    //       status: status,
    //     },
    //   });

    //   //if task  not found
    //   if (!task) return res.status(404).json({ msg: `task not found!` });
    //   return res.status(200).json(task);
    // }

    // // const tasks = await Task.findAll();
    // // res.json(tasks);
    const { search, status, minPriority } = req.query;
    const where = {}; // empty obj to filter-inside findAll()

    //  ?search=review → tasks whose title contains "review"
    if (search) {
      where.title = { [Op.iLike]: `%${search}%` };
    }

    //  ?status=todo → tasks with an exact status
    if (status) {
      where.status = status;
    }

    // ?minPriority=2 → tasks with priority ≥ 2
    if (minPriority) {
      where.priority = { [Op.gte]: Number(minPriority) };
    }

    // console.log(where);

    const task = await Task.findAll({
      where, // where : where,
      /**
       * {title = { [Op.iLike] : `%${search}%`}}
       * {status = status}
       * {priority = { [Op.gte]: Number(minPriority) }}
       */
    });

    // check task
    if (!task) return res.sendStatus(404);
    return res.status(200).json(task);
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

// create a task - validate title
taskRouter.post("/", requireTitle, async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    if (err.name === "SequelizeValidationError")
      return res.status(400).json({ error: err.errors[0].message });
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
