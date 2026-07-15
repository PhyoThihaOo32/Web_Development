const { Sequelize } = require("sequelize");

const DB_URL = process.env.DATABASE_URL || "postgres://localhost:5432/spotify";

const db = new Sequelize(DB_URL, {
  dialect: "postgres",
});

module.exports = db;
