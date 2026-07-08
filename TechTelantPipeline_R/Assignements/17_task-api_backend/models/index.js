/**
 * In db.js (or a small models/index.js), declare the association:
 * a User has many Tasks, and a Task belongs to a User.
 */

const User = require("./User");
const Task = require("./Task");

User.hasMany(Task);
Task.belongsTo(User);

module.exports = { User, Task };
