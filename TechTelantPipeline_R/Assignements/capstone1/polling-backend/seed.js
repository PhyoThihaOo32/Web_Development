const db = require("./db");
const { Option, Vote, Poll } = require("./models");

const createFavColorPoll = () => {
  return Poll.create({
    title: "Favorite Color",
    description: "What's your favorite color",
  });
};

const createColorOptions = (favColor) => {
  return Option.bulkCreate([
    { text: "Red", PollId: favColor.id },
    { text: "Blue", PollId: favColor.id },
    { text: "Green", PollId: favColor.id },
  ]);
};

const createColorVotes = (colorOptions) => {
  return Vote.bulkCreate([
    { optionId: colorOptions[0].id }, // Red
    { optionId: colorOptions[0].id }, // Red
    { optionId: colorOptions[1].id }, // Blue
    { optionId: colorOptions[2].id }, // Green
  ]);
};

const createSeasonPoll = () => {
  return Poll.create({
    title: "Best Season",
    description: "Which season do you like most?",
  });
};

const createSeasonOptions = (bestSeason) => {
  return Option.bulkCreate([
    { text: "Summer", PollId: bestSeason.id },
    { text: "Winter", PollId: bestSeason.id },
  ]);
};

const createSeasonVotes = (seasonOptions) => {
  return Vote.bulkCreate([
    { optionId: seasonOptions[0].id },
    { optionId: seasonOptions[0].id },
    { optionId: seasonOptions[1].id },
  ]);
};

async function seed() {
  db.sync({ force: true })
    .then(createFavColorPoll)
    .then(createColorOptions)
    .then(createColorVotes)
    .then(createSeasonPoll)
    .then(createSeasonOptions)
    .then(createSeasonVotes);
  console.log("Seed successful");
}

seed();
