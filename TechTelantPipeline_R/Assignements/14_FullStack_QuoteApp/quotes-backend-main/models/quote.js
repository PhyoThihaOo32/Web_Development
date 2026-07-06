// ============================================================
// models/quote.js — Quote model
//
// YOUR TASKS:
//   1. Import DataTypes from 'sequelize'
//   2. Import your db connection
//   3. Define a Quote model with these fields:
//
//      Field    Type      Constraint
//      -------  --------  --------------------
//      text     STRING    allowNull: false  (the quote itself)
//      author   STRING    allowNull: false  (who said it)
//
//      Sequelize adds id, createdAt, and updatedAt automatically.
//      Do not define them yourself.
//
//   4. Export the model
// ============================================================
const { DataTypes } = require("sequelize");
const db = require("./../db/index");

const Quote = db.define("quote", {
  text: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Quote;
