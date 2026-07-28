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
  const { title, description, options } = req.body;

  try {
    const post = await Poll.create({
      title,
      description,
    });

    // const listOpt = options.map(
    //   async (option) => await Option.create({ text: option, PollId: post.id }),
    // );

    const listOpt = await Option.bulkCreate(
      options.map((option) => ({
        text: option.text,
        PollId: post.id,
      })),
    );

    res.status(201).json({ ...post.toJSON(), options: listOpt });
  } catch (err) {
    next(err);
  }
});

pollRouter.post("/:id/vote", async (req, res, next) => {
  const vote = Number(req.params.id);
  try {
    const castVote = await Vote.create({ vote });
    if (!option) return res.status(404).json({ message: "Option not found." });
    res.status(201).json(castVote);
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
    await Poll.destroy({ where: { id: req.params.id } });
    return res.status(204).send("delete worked");
  } catch (error) {
    // console.log(error.message) .
    next(error);
  }
});

module.exports = pollRouter;
