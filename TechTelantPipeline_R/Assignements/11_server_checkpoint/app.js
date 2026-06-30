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

let careNotes = [
  { id: 1, plantId: 1, note: "Needs water every 2 weeks." },
  { id: 2, plantId: 1, note: "Tolerates low light well." },
  { id: 3, plantId: 3, note: "Loves humidity." },
];

let nextNoteId = 4;

let nextId = 5;
const PORT = 8080;

// middlewares
// logging middleare that show request method and URL
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function validatePlant(req, res, next) {
  const { name, type } = req.body;
  if (!name || !type)
    return res.status(400).json({ message: `missing name and type.` });
  next();
}

/**
 * Explain: What is a good reason to have a middleware for our POST routes?
 * To make sure the req.body has valid data- and if the data is not valid
 * the route will stop,
 *
 *
 *
 * Explain: What happens to a request if this middleware never calls
 * next(), and never sends a response?
 * The request get stuck and keep waiting, because express don't know what
 * function to call next or what to do next.
 */

app.use(logger);

/**
 * Explain: What happens if you put this middleware
 * below your routes instead of above them?
 * Express will call the route and the middleware will never run.
 */

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
app.post("/api/plants", validatePlant, (req, res, next) => {
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

/**
 * -------------------Part2----------------------------------------
 */

app.get("/api/notes", (req, res) => {
  try {
    res.status(200).json(careNotes);
  } catch (error) {
    next(error);
  }
});

// get all care note
app.get("/api/plants/:plantId/notes", (req, res, next) => {
  try {
    const plantId = Number(req.params.plantId);
    const notes = careNotes.filter((note) => note.plantId === plantId);
    if (notes.length === 0)
      return res
        .status(404)
        .json({ message: `note with plant id ${plantId} not found.` });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
});

/**
 * Explain: What does :plantId represent in this URL?
 * Why is it a param, and notes isn't?
 * plantId represent /api/plants/1/notes => foregin key in careNote which is also the primary key in plants
 * becaue careNotes can't be mention or exit with the plantId
 */

// make a new note - POST
app.post("/api/plants/:plantId/notes", (req, res, next) => {
  try {
    const { note } = req.body;
    const newNote = {
      id: nextNoteId++,
      plantId: Number(req.params.plantId),
      note,
    };
    careNotes.push(newNote);
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
});

// Delete a note
app.delete("/api/notes/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const index = careNotes.findIndex((note) => note.id === id);
    if (index === -1)
      return res
        .status(404)
        .json({ message: `careNote with id ${id} not found.` });
    careNotes.splice(index, 1);
    res.status(204).json({ message: `note id ${id} deleted.` });
  } catch (error) {
    next(error);
  }
});

/**
 * Explain: This :id is the note's own id, not a plant's id.
 * Why does this route start with /api/notes, and not /api/plants?
 *
 * Becaue the route don't need to go to the plant(database-or memeory) in this case and
 * we are now dealing directly with carenote(database - memeory) - we need the carenotes' id which is
 * not related to or rely on plants.
 *
 */

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Server Error");
});

app.listen(PORT, () => {
  console.log("Server running on port 8080.");
});
