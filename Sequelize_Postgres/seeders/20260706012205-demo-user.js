"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "Phyo",
          email: "phyo@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Alice",
          email: "alice@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Bob",
          email: "bob@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "Charlie",
          email: "charlie@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: "David",
          email: "david@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: "Emma",
          email: "emma@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: "Frank",
          email: "frank@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: "Grace",
          email: "grace@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: "Henry",
          email: "henry@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: "Isabella",
          email: "isabella@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 1,
          name: "Tech With Phyo",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Alice's Kitchen",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Bob Travels",
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 1,
          title: "Introduction to Sequelize",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "PostgreSQL Basics",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "Making Homemade Pizza",
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          title: "Top 10 Places in NYC",
          channel_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          title: "Central Park Walking Tour",
          channel_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
