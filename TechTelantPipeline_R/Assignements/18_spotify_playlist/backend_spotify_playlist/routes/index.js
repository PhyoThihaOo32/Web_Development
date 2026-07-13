const router = require("express").Router();
const playlistRouter = require("./playlist");
const songRouter = require("./songs");

router.use("/playlist", playlistRouter);
router.use("/songs", songRouter);

module.exports = router;
