const { DataTypes } = require("sequelize");
const db = require("../db");

const Playlist = db.define("Playlist", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Playlist;
