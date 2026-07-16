import { useState } from "react";

function AddSongCard({ addSong, playlistId }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [duration, setDuration] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addSong({ title, artist, duration, PlaylistId: playlistId });
    setTitle("");
    setArtist("");
    setDuration("");
    console.log(`playlistID -------- ${playlistId}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            placeholder="song title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
          <button type="submit">Add Song</button>
        </section>
      </form>
    </div>
  );
}

export default AddSongCard;
