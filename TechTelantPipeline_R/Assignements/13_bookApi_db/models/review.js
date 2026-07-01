const { DataTypes } = require("sequelize");
const dbConnection = require("./../db");

const Review = dbConnection.define("review", {
  reviewer: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT },
});

module.exports = Review;

/**
 * Explain: Book.hasMany(Review) and Review.belongsTo(Book) both describe the same relationship.
 * What does each one actually add on its own — why do you need both?
 *
 *
 *
 */
