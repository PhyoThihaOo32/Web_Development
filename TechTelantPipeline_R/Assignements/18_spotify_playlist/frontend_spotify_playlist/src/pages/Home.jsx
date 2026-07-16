import { useState, useEffect } from "react";
import PlaylistCard from "../components/PlaylistCard";
import AddPlaylist from "../components/AddPlaylistCard";

const API_URL = "https://web-development-zynz.onrender.com";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

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
  async function addPlaylist(newPlaylist) {
    const response = await fetch(API_URL + "/api/playlist", {
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
    const response = await fetch(`${API_URL}/api/playlist/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setError("Failed to delete the playlist");
      return;
    }

    const newPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(newPlaylists);
  }

  return (
    <>
      <div>
        <AddPlaylist addPlaylist={addPlaylist}></AddPlaylist>
        <div className="playlist-card-container">
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              deletePlaylist={deletePlaylist}
              playlist={playlist}
            ></PlaylistCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
