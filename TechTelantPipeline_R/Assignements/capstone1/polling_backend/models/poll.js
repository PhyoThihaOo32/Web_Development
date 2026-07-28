const { DataTypes } = require("sequelize");
const db = require("../db");

const Poll = db.define("Poll", {
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Poll;
