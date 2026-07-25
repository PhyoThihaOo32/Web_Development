const voteRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

// get all votes
voteRouter.get("/", async (req, res, next) => {
  try {
    const votes = await Vote.findAll();
    res.status(200).json(votes);
  } catch (error) {
    next(error);
  }
});

// get a vote
voteRouter.get("/:id", async (req, res, next) => {
  try {
    const vote = await Vote.findByPk(Number(req.params.id), {
      include: Option,
    });
    if (!vote) return res.status(404).json({ message: `Vote Not Found.` });
    res.status(200).json(vote);
  } catch (error) {
    next(error);
  }
});

// create a vote
voteRouter.post("/", async (req, res, next) => {
  try {
    const { optionId } = req.body;

    // 1. Validate input
    if (!optionId) {
      return res.status(400).json({
        message: "optionId is required.",
      });
    }

    // 2. Verify the option exists
    const option = await Option.findByPk(optionId);
    if (!option) {
      return res.status(404).json({
        message: `Option with id ${optionId} not found.`,
      });
    }

    // 3. Create the vote
    const newVote = await Vote.create({ optionId });

    return res.status(201).json(newVote);
  } catch (error) {
    next(error);
  }
});

// delete a vote
voteRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid vote id." });
    }

    // Find the vote
    const vote = await Vote.findByPk(id);
    if (!vote) {
      return res.status(404).json({ message: "Vote not found." });
    }

    // Delete it
    await vote.destroy();

    // Respond with 204 (no content)
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = voteRouter;
