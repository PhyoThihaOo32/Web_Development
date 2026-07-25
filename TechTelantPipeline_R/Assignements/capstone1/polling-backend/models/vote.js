const { DataTypes } = require("sequelize");
const db = require("../db");

const Vote = db.define("Vote", {
  optionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Vote;