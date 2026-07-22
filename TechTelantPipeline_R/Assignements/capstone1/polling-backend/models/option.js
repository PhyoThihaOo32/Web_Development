const { DataTypes } = require("sequelize");
const db = require("../db");

const Option = db.define("Option", {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pollId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Option;
