const db = require("./db");
const { Poll, Option, Vote } = require("./models");

// --------------------
// Favorite Color
// --------------------
const createFavoriteColorPoll = () => {
  return Poll.create({
    title: "Favorite Color",
    description:
      "If you could only use one color for the rest of your life, which would you choose?",
  });
};

const createFavoriteColorOptions = (poll) => {
  return Option.bulkCreate([
    { text: "Blue", PollId: poll.id },
    { text: "Black", PollId: poll.id },
    { text: "Green", PollId: poll.id },
    { text: "Purple", PollId: poll.id },
  ]);
};

const createFavoriteColorVotes = (options) => {
  return Vote.bulkCreate([
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[1].id },
    { optionId: options[1].id },
    { optionId: options[2].id },
    { optionId: options[3].id },
  ]);
};

// --------------------
// Best Programming Language
// --------------------
const createProgrammingPoll = () => {
  return Poll.create({
    title: "Best Programming Language",
    description: "Which programming language do you enjoy using the most?",
  });
};

const createProgrammingOptions = (poll) => {
  return Option.bulkCreate([
    { text: "JavaScript", PollId: poll.id },
    { text: "Python", PollId: poll.id },
    { text: "C++", PollId: poll.id },
    { text: "Java", PollId: poll.id },
  ]);
};

const createProgrammingVotes = (options) => {
  return Vote.bulkCreate([
    { optionId: options[1].id },
    { optionId: options[1].id },
    { optionId: options[1].id },
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[2].id },
    { optionId: options[2].id },
    { optionId: options[3].id },
  ]);
};

// --------------------
// Dream Vacation
// --------------------
const createVacationPoll = () => {
  return Poll.create({
    title: "Dream Vacation",
    description: "Where would you go if money wasn't a concern?",
  });
};

const createVacationOptions = (poll) => {
  return Option.bulkCreate([
    { text: "Japan", PollId: poll.id },
    { text: "Switzerland", PollId: poll.id },
    { text: "Iceland", PollId: poll.id },
    { text: "New Zealand", PollId: poll.id },
  ]);
};

const createVacationVotes = (options) => {
  return Vote.bulkCreate([
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[1].id },
    { optionId: options[2].id },
    { optionId: options[3].id },
    { optionId: options[3].id },
  ]);
};

// --------------------
// Is a Hot Dog a Sandwich?
// --------------------
const createHotDogPoll = () => {
  return Poll.create({
    title: "Is a Hot Dog a Sandwich?",
    description: "The debate that has divided the internet for years.",
  });
};

const createHotDogOptions = (poll) => {
  return Option.bulkCreate([
    { text: "Yes", PollId: poll.id },
    { text: "No", PollId: poll.id },
  ]);
};

const createHotDogVotes = (options) => {
  return Vote.bulkCreate([
    { optionId: options[0].id },
    { optionId: options[0].id },
    { optionId: options[1].id },
    { optionId: options[1].id },
    { optionId: options[1].id },
    { optionId: options[1].id },
  ]);
};

async function seed() {
  try {
    await db.sync({ force: true });

    const colorPoll = await createFavoriteColorPoll();
    const colorOptions = await createFavoriteColorOptions(colorPoll);
    await createFavoriteColorVotes(colorOptions);

    const programmingPoll = await createProgrammingPoll();
    const programmingOptions = await createProgrammingOptions(programmingPoll);
    await createProgrammingVotes(programmingOptions);

    const vacationPoll = await createVacationPoll();
    const vacationOptions = await createVacationOptions(vacationPoll);
    await createVacationVotes(vacationOptions);

    const hotDogPoll = await createHotDogPoll();
    const hotDogOptions = await createHotDogOptions(hotDogPoll);
    await createHotDogVotes(hotDogOptions);

    console.log("🌱 Database seeded successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
  }
}

seed();
