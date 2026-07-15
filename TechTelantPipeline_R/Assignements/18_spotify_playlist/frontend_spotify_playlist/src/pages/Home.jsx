import { useState, useEffect } from "react";
import PlaylistCard from "../components/PlaylistCard";
import AddCard from "../components/AddCard";

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const url = "https://web-development-zynz.onrender.com/api/playlist";
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
    const response = await fetch(
      "https://web-development-zynz.onrender.com/api/playlist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playlistObj),
      },
    );
    const data = await response.json();
    setPlaylists([...playlists, data]);
  }

  async function deletePlaylist(id) {
    const response = await fetch(
      `https://web-development-zynz.onrender.com/api/playlist/${id}`,
      {
        method: "DELETE",
      },
    );

    const newPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(newPlaylists);
  }

  return (
    <>
      <div>
        <AddCard addPlaylist={addPlaylist}></AddCard>
        <div className="playlist-card-container">
          {playlists.map((playlist) => (
            <div key={playlist.id}>
              <PlaylistCard
                handleDelete={deletePlaylist}
                playlist={playlist}
              ></PlaylistCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
