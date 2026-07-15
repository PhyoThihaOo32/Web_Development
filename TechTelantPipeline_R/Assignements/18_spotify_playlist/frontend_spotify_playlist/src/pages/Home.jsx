import { useState, useEffect } from "react";
import PlaylistCard from "../components/PlaylistCard";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://localhost:8000/api/playlist";
    async function loadPlaylists() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to Load the playlists.");
        const data = await response.json();
        console.log(data);
        setPlaylists([...data]);
      } catch (error) {
        setError(error.message);
      }
    }
    loadPlaylists();
  }, []);

  // add newplaylist
  async function addPlaylist() {
    const newPlaylist = {
      name: "Raining Days",
      description: "Good Music for raining day",
    };
    const response = await fetch("http://localhost:8000/api/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaylist),
    });
    const data = await response.json();
    setPlaylists([...playlists, data]);
  }

  async function deletePlaylist(id) {
    const response = await fetch(`http://localhost:8000/api/playlist/${id}`, {
      method: "DELETE",
    });

    const newPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(newPlaylists);
  }

  return (
    <>
      <div>
        <h1 className="playlist-title">Your Playlists</h1>
        <button onClick={addPlaylist}>Add Playlist</button>

        <div className="playlist-card-container">
          {playlists.map((playlist) => (
            <>
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
              ></PlaylistCard>
              <button onClick={() => deletePlaylist(playlist.id)}>
                Delete
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
