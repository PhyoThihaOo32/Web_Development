const pollRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

// get all posts
pollRouter.get("/", async (req, res, next) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (err) {
    next(err);
  }
});

// get a single post
pollRouter.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const poll = await Poll.findByPk(id, {
      include: [
        {
          model: Option,
          include: [Vote], // ← also include the votes for each option
        },
      ],
    });
    if (!poll) return res.status(404).json({ message: `Poll Not Found.` });
    res.status(200).json(poll);
  } catch (err) {
    next(err);
  }
});

// create a poll
pollRouter.post("/", async (req, res, next) => {
  try {
    const post = await Poll.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

// update a poll
pollRouter.patch("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const poll = await Poll.findByPk(id);
    if (!poll) return res.status(404).json({ message: `Poll Not Found.` });
    await poll.update(req.body);
    res.status(200).json(poll);
  } catch (error) {
    next(error);
  }
});

// delete a poll
pollRouter.delete("/:id", async (req, res, next) => {
  try {
    const poll = await Poll.findByPk(Number(req.params.id));
    if (!poll) return res.status(404).json({ message: `Poll Not Found.` });
    await poll.destroy();
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = pollRouter;
