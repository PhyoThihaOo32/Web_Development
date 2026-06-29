const { Sequelize } = require("sequelize");

// TODO: Workshop Part 1: create a new Sequelize instance pointed at your
// books_api database, then export it. Same postgres:// connection string

const dbConnection = new Sequelize("postgres://localhost:5432/books_api");

module.exports = dbConnection;
