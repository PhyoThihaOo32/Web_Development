const Workout = require("./../models/Workout");
const mongoose = require("mongoose");

// get all workouts
const get_workouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get a single workout
const get_workout = async (req, res) => {
  const { id } = req.params;

  // check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Work out Not Found",
    });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({
      error: "Workout Not Found.",
    });
  }

  res.status(200).json(workout);
};

// create a new workout
const create_workout = async (req, res) => {
  const { title, reps, load } = req.body;

  // error handling
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }

  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please Fill in all Fields.", emptyFields });
  }
  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// delete a workout
const delete_workout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      error: "Workout not found.",
    });
  }

  const workout = await Workout.findOneAndDelete({
    _id: id,
  });

  if (!workout) {
    return res.status(400).json({
      error: "Workout not Found.",
    });
  }

  return res.status(200).json(workout); // Use 204 only when you intentionally send no response body:
};

// update a workout
const update_workout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      error: "Workout not found.",
    });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
  );

  if (!workout) {
    return res.status(400).json({
      error: "Invalid Workout.",
    });
  }

  res.status(200).json(workout);
};

module.exports = {
  create_workout,
  get_workouts,
  get_workout,
  delete_workout,
  update_workout,
};
