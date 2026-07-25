const { Sequelize } = require("sequelize");
const db = new Sequelize("postgres://postgres:root@localhost:5432/poll-app", {
  logging: false,
});

module.exports = db;
