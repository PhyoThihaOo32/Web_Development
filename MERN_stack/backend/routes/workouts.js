const express = require("express");
const router = express.Router(); // create express router
const Workout = require("./../models/Workout");
const {
  create_workout,
  get_workouts,
  get_workout,
  update_workout,
  delete_workout,
} = require("./../controllers/workoutController");

// get all workouts
router.get("/", get_workouts);

// get a single workout
router.get("/:id", get_workout);

// post a new workout
router.post("/", create_workout);

// delete a workout
router.delete("/:id", delete_workout);

// update a workout
router.patch("/:id", update_workout);

module.exports = router;
