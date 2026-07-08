/**
 * In models/Task.js, define a Task with title, priority
 * (a number, default 1), and status (a string, default "todo").
 */

const { DataTypes } = require("sequelize");
const db = require("./../db");

const Task = db.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  priority: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "todo",
  },
});

module.exports = Task;
