const { Sequelize } = require("sequelize"); // create one sequelize instance

const db = new Sequelize("postgres://localhost:5432/task_api"); // point to task_api database

module.exports = db; // export the db
