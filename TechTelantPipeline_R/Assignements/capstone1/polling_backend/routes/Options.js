const optionRouter = require("express").Router();
const { Poll, Option, Vote } = require("../models");

// get all options
optionRouter.get("/", async (req, res, next) => {
  try {
    const allOptions = await Option.findAll();
    res.status(200).json(allOptions);
  } catch (err) {
    next(err);
  }
});

// get a options
optionRouter.get("/:id", async (req, res, next) => {
  try {
    const option = await Option.findByPk(Number(req.params.id));
    if (!option) return res.status(404).json({ message: `Option not found.` });
    res.status(200).json(option);
  } catch (error) {
    next(error);
  }
});

// update a option
optionRouter.patch("/:id", async (req, res, next) => {
  try {
    const option = await Option.findByPk(Number(req.params.id));
    if (!option) return res.status(404).json({ message: `Option Not Found.` });
    await option.update(req.body);
    res.status(200).json(option);
  } catch (error) {
    next(error);
  }
});

// create a option
optionRouter.post("/", async (req, res, next) => {
  try {
    // destruct text and pollId from request body
    const { text, pollId } = req.body;

    // validate input
    if (!text || !pollId) {
      return res.status(400).json({ message: `text and pollId are required.` });
    }
    // verify if poll exist by that Id
    const poll = await Poll.findByPk(pollId);
    if (!poll)
      return res
        .status(404)
        .json({ message: `Poll with Id${pollId} Not Found.` });

    const newOption = await Option.create(req.body);
    res.status(201).json(newOption);
  } catch (error) {
    next(error);
  }
});

// delete a option
optionRouter.delete("/:id", async (req, res, next) => {
  try {
    const option = await Option.findByPk(Number(req.params.id));
    if (!option) return res.status(404).json({ message: `Option Not Found.` });

    await option.destroy();
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = optionRouter;
