const Option = require("./option");
const Poll = require("./poll");
const Vote = require("./vote");
const db = require("../db");

Poll.hasMany(Option, {
  foreignKey: "pollId",
  onDelete: "CASCADE",
});
Option.belongsTo(Poll, { foreignkey: "pollId", as: "poll" });

Option.hasMany(Vote, {
  foreignKey: "optionId",
  onDelete: "CASCADE",
});
Vote.belongsTo(Option, { foreignKey: "optionId" });

module.exports = { db, Option, Poll, Vote };
