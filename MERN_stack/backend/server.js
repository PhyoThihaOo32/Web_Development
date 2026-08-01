const express = require("express");
const app = express(); // express app
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const PORT = process.env.PORT;

// middleware
app.use(express.json()); // reads incoming JSON req bodies and puts the result in req.body which is js obj

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

/// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(PORT, () => {
      console.log("Db is connected and Sever running on PORT " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
