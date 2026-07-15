import { useState, useEffect } from "react";
import PlaylistCard from "../components/PlaylistCard";
import AddCard from "../components/AddCard";

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const url = API_URL + "/api/playlist";
    async function loadPlaylists() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to Load the playlists.");
        const data = await response.json();
        setPlaylists([...data]);
      } catch (error) {
        setError(error.message);
      }
    }
    loadPlaylists();
  }, []);

  // add newplaylist
  async function addPlaylist(playlistObj) {
    const response = await fetch(API_URL + "/api/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlistObj),
    });
    const data = await response.json();
    setPlaylists([...playlists, data]);
  }

  async function deletePlaylist(id) {
    const response = await fetch(`${API_URL}/api/playlist/${id}`, {
      method: "DELETE",
    });

    const newPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(newPlaylists);
  }

  return (
    <>
      <div>
        <AddCard addPlaylist={addPlaylist} />

        <div className="playlist-card-container">
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <PlaylistCard playlist={playlist}></PlaylistCard>
              <button onClick={() => deletePlaylist(playlist.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
