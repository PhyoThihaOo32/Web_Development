const playlistRouter = require("express").Router();
const { Playlist, Song } = require("./../models");

// get all playlist
playlistRouter.get("/", async (req, res, next) => {
  try {
    const playlists = await Playlist.findAll();
    res.status(200).json(playlists);
  } catch (error) {
    next(error);
  }
});

// get a playlist by id include the song
playlistRouter.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const playlist = await Playlist.findByPk(id, {
      include: Song,
    });
    if (!playlist)
      return res.status(404).json({ message: `Playlist Not Found.` });
    res.status(200).json(playlist);
    console.log(playlist);
  } catch (error) {
    next(error);
  }
});

// update a playlist
playlistRouter.patch("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const playlist = await Playlist.findByPk(id);
    if (!playlist)
      return res.status(404).json({ message: `Playlist Not Found.` });
    await playlist.update(req.body);
    res.status(200).json(playlist);
  } catch (error) {
    next(error);
  }
});

// create a playlist
playlistRouter.post("/", async (req, res, next) => {
  try {
    const newPlaylist = await Playlist.create(req.body);
    res.status(201).json(newPlaylist);
  } catch (error) {
    next(error);
  }
});

// delete a playlist
playlistRouter.delete("/:id", async (req, res, next) => {
  try {
    const playlist = await Playlist.findByPk(Number(req.params.id));
    if (!playlist)
      return res.status(404).json({ message: `Playlist Not Found.` });
    await playlist.destroy(); // delete the playlist
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = playlistRouter;
