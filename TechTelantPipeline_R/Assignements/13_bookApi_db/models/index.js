const Book = require("./book");
const Review = require("./review");

Book.hasMany(Review);
Review.belongsTo(Book);

module.exports = { Book, Review };
