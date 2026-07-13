const db = require("../db");
const Playlist = require("./Playlist");
const Song = require("./Songs");

Playlist.hasMany(Song);
Song.belongsTo(Playlist);

module.exports = { db, Playlist, Song };
