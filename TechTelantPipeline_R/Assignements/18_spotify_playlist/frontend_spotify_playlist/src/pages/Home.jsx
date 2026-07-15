import { useState, useEffect } from "react";
import PlaylistCard from "../components/PlaylistCard";
import AddCard from "../components/AddCard";

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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

  // event hanlders
  // get playlist title
  function handleGetName(event) {
    setName(event.target.value);
  }

  // get playlist description
  function handleGetDescription(event) {
    setDescription(event.target.value);
  }

  // add newplaylist
  async function addPlaylist() {
    const newPlaylist = {
      name,
      description,
    };
    const response = await fetch(API_URL + "/api/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlaylist),
    });
    const data = await response.json();
    setPlaylists([...playlists, data]);
    setName("");
    setDescription("");
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
        <AddCard></AddCard>

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
