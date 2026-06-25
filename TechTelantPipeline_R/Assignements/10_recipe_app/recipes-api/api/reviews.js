const express = require("express");
const router = express.Router();
// mounted at both /recipes and /reviews in api/index.js — so "/:recipeId/reviews" answers under /api/recipes, and "/:id" answers under /api/reviews

let reviews = [
  { id: 1, recipeId: 1, reviewer: "Sam", rating: 5, comment: "Restaurant quality." },
  { id: 2, recipeId: 1, reviewer: "Priya", rating: 4, comment: "Good but a little salty." },
  { id: 3, recipeId: 2, reviewer: "Alex", rating: 5, comment: "My new go-to." },
];

let nextReviewId = 4;

// route-specific middleware: only runs on the POST route below
function validateRating(req, res, next) {
  const rating = req.body.rating;
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    return res.sendStatus(400);
  }
  next();
}

router.get("/:recipeId/reviews", (req, res, next) => {
  try {
    const recipeReviews = reviews.filter(
      (review) => review.recipeId === Number(req.params.recipeId)
    );
    res.json(recipeReviews);
  } catch (err) {
    next(err);
  }
});

router.post("/:recipeId/reviews", validateRating, (req, res, next) => {
  try {
    const newReview = {
      id: nextReviewId++,
      recipeId: Number(req.params.recipeId),
      reviewer: req.body.reviewer,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const index = reviews.findIndex((review) => review.id === Number(req.params.id));
    if (index === -1) {
      return res.sendStatus(404);
    }
    reviews.splice(index, 1);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
