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
    { text: "Red", pollId: favColor.id },
    { text: "Blue", pollId: favColor.id },
    { text: "Green", pollId: favColor.id },
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
    { text: "Summer", pollId: bestSeason.id },
    { text: "Winter", pollId: bestSeason.id },
  ]);
};

const createSeasonVotes = (seasonOptions) => {
  return Vote.bulkCreate([
    { optionId: seasonOptions[0].id }, // Summer
    { optionId: seasonOptions[0].id }, // Summer
    { optionId: seasonOptions[1].id }, // Winter
  ]);
};

async function seed() {
  try {
    await db.sync({ force: true });

    const favColor = await createFavColorPoll();
    const colorOptions = await createColorOptions(favColor);
    await createColorVotes(colorOptions);

    const bestSeason = await createSeasonPoll();
    const seasonOptions = await createSeasonOptions(bestSeason);
    await createSeasonVotes(seasonOptions);

    console.log("Seed successful");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
