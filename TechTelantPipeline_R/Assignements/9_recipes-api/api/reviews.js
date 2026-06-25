const reviewRouter = require("express").Router();

let reviews = [
  {
    id: 1,
    recipeId: 1,
    reviewer: "Sam",
    rating: 5,
    comment: "Restaurant quality.",
  },
  {
    id: 2,
    recipeId: 1,
    reviewer: "Priya",
    rating: 4,
    comment: "Good but a little salty.",
  },
  { id: 3, recipeId: 2, reviewer: "Alex", rating: 5, comment: "My new go-to." },
];

let nextReviewId = 4;

reviewRouter.get("/:recipeId/reviews", (req, res) => {
  const reviewId = Number(req.params.recipeId);
  const currReview = reviews.find((review) => reviewId === review.id);
  if (!currReview)
    return res.status(404).json({ message: `Review ${id} not found.` });
  res.status(200).json(currReview);
});

reviewRouter.post("/:recipeId/reviews", (req, res) => {
  const { reviewer, rating, comment } = req.body;
  if (rating < 1 || rating > 5)
    return res.status(400).json({ message: "Invalid Rating" });
  const newReview = {
    id: nextReviewId++,
    reviewer,
    rating,
    comment,
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
});

module.exports = reviewRouter;
