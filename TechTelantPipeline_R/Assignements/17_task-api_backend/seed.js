/**
 * 
 * Make a file seed.js.
Import db, User, and Task.
Call db.sync({ force: true }) here only — this wipes and rebuilds the tables so seeding is repeatable.
Create one user, then create a few tasks that belong to that user (pass the user's id).
Add a script "seed": "node seed.js" to package.json, then run npm run seed.
 */

const db = require("./db");
const { User, Task } = require("./models");

async function seed() {
  await db.sync({ force: true });
  const phyo = await User.create({
    name: "phyo",
    email: "phyo@gmail.com",
    password: "1234567890",
  });

  await Task.create({
    title: "Write project proposal",
    priority: 3,
    status: "todo",
    UserId: phyo.id,
  });
  await Task.create({
    title: "Review pull requests",
    priority: 2,
    status: "doing",
    UserId: phyo.id,
  });
  await Task.create({
    title: "Water the plants",
    priority: 1,
    status: "done",
    UserId: phyo.id,
  });

  const bob = await User.create({
    name: "bob dylan",
    email: "bobdylan@countryfolkmail.com",
    password: "bobdylanmusic!",
  });

  await Task.create({
    title: "Compose New Music",
    priority: 1,
    status: "inspiring",
    UserId: bob.id,
  });

  console.log(`Seeded user and related tasks`);
  process.exit();
}

seed();
