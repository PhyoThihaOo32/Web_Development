const { db, Song, Playlist } = require("./model");

const playlists = [
  {
    name: "Workout Mix",
    description:
      "High-energy songs to keep you motivated during your workouts.",
  },
  {
    name: "Road Trip",
    description: "Feel-good tracks perfect for long drives and adventures.",
  },
  {
    name: "Chill Vibes",
    description:
      "Relaxing music for studying, reading, or unwinding after a long day.",
  },
  {
    name: "Throwback Hits",
    description: "Classic songs from past decades that never get old.",
  },
  {
    name: "Focus Mode",
    description: "Instrumental and lo-fi beats to help you stay productive.",
  },
  {
    name: "Party Anthems",
    description: "Upbeat songs guaranteed to get everyone dancing.",
  },
];

const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    PlaylistId: 1,
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    duration: 204,
    PlaylistId: 1,
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    duration: 285,
    PlaylistId: 2,
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    duration: 203,
    PlaylistId: 3,
  },
  {
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    duration: 158,
    PlaylistId: 4,
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    duration: 263,
    PlaylistId: 5,
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: 270,
    PlaylistId: 6,
  },
];

async function seed() {
  await db.sync({ force: true });
  await Playlist.bulkCreate(playlists);
  await Song.bulkCreate(songs);

  console.log("Seed!");
  await db.close();
}

seed();
