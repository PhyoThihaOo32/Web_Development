const songRouter = require("express").Router();
const Song = require("../models/Songs");

songRouter.get("/", async (req, res, next) => {
  try {
    const songs = await Song.findAll();
    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
});

// get a song by id
songRouter.get("/:id", async (req, res, next) => {
  try {
    const song = await Song.findByPk(Number(req.params.id));
    if (!song) return res.status(404).json({ message: `Song Not Found.` });
    res.status(200).json(song);
  } catch (error) {
    next(error);
  }
});

// create/add a song
songRouter.post("/", async (req, res, next) => {
  try {
    const { title, artist, duration, PlaylistId } = req.body;
    if (!title || !artist || !duration || !PlaylistId)
      return res
        .status(404)
        .json({ message: `Request Body Missing Information` });

    // create a song
    const song = await Song.create({
      title,
      artist,
      duration,
      PlaylistId,
    });

    res.status(201).json(song);
  } catch (error) {
    next(error);
  }
});

// delete a song
songRouter.delete("/:id", async (req, res, next) => {
  try {
    const song = await Song.findByPk(Number(req.params.id));
    if (!song) return res.status(404).json({ message: `Song Not Found.` });
    await song.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = songRouter;
