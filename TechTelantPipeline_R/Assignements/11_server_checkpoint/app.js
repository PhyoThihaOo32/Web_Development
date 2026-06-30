const express = require("express"); // import express
const app = express(); //create express app

app.use(express.json()); // middleware - let express read json data from request body

let plants = [
  {
    id: 1,
    name: "Snake Plant",
    type: "Succulent",
    sunlight: "Low",
    watered: true,
  },
  { id: 2, name: "Pothos", type: "Vine", sunlight: "Medium", watered: false },
  {
    id: 3,
    name: "Monstera",
    type: "Tropical",
    sunlight: "Medium",
    watered: true,
  },
  {
    id: 4,
    name: "Cactus",
    type: "Succulent",
    sunlight: "High",
    watered: false,
  },
];

let nextId = 5;
const PORT = 8080;

// get all plants
app.get("/api/plants", (request, response, next) => {
  try {
    const { type } = request.query; // obj destruct
    //   console.log(type);
    if (type) {
      const currPlant = plants.filter((plant) => plant.type === type);
      return response.status(200).json(currPlant);
    }
    response.status(200).json(plants);
  } catch (error) {
    next(error);
  }
});

/**
 * Explain: What is the difference between req.params and req.query? Give one example of when you would use each one.
 *
 * req.params get values from URL path like plants/3 -> 3
 * req.query get values after ?
 * like /plants?type=Tropical => {type: Tropical} - obj
 *
 */

// Get a plant by id
app.get("/api/plants/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    const plant = plants.find((plant) => plant.id === id);
    if (!plant) {
      return res
        .status(404)
        .json({ message: `plant with id ${id} not found.` });
    }
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

/**
 * 
 * Explain: req.params.id is always a string. Why do you need to wrap it in Number() before comparing it to a plant's id?
 *  Because plant.id is a number and we need to typecast(convert) the req.params.id which is  String to number since we are using strict comparison ===.

Explain: What happens if you remove await from in front of the delay? Does the route still work the same way?
 * If we remove await, the program will execute the following line and instead of waiting for setTimeOut() delay.
 */

// create a new plant - POST
app.post("/api/plants", (req, res, next) => {
  try {
    const { name, type, sunlight, watered = true } = req.body;

    const newPlant = {
      id: nextId++,
      name,
      type,
      sunlight,
      watered,
    };

    plants.push(newPlant);
    res.status(201).json(newPlant);
  } catch (error) {
    next(error);
  }
});

// update the plant - PATCH
app.patch("/api/plants/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const plant = plants.find((plant) => plant.id === id);
    if (!plant)
      return res.status(404).json({ message: `plant id ${id} not found.` });

    // update the plant with req.body->obj
    Object.assign(plant, req.body);
    res.status(200).json(plant);
  } catch (error) {
    next(error);
  }
});

// delete a plant
app.delete("/api/plants/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const index = plants.findIndex((plant) => plant.id === id);
    if (index === -1)
      return res.status(404).json({ message: `plant id ${id} not found` });

    plants.splice(index, 1);
    res.status(204).json({ message: `plant id ${id} deleted.` });
    // const plant = plants.filter(plant => plant.id !== id);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Server Error");
});

app.listen(PORT, () => {
  console.log("Server running on port 8080.");
});
