import SongCard from "../components/SongCard";
import AddSongCard from "../components/AddSongCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Song() {
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const API_URL = "https://web-development-zynz.onrender.com";

  useEffect(() => {
    const url = API_URL + `/api/playlist/${Number(id)}`;

    async function getSongs() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to Get Songs");
        }
        const data = await response.json();
        const filteredSongs = data.Songs;
        setSongs([...filteredSongs]);
        setPlaylist({ name: data.name, description: data.description });
      } catch (error) {
        setError(error);
      }
    }
    getSongs();
  }, []);

  async function addSong(newSong) {
    const url = API_URL + `/api/songs`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    const data = await response.json();
    console.log(data);
    setSongs([...songs, data]);
  }

  async function deleteSong(id) {
    const response = await fetch(`${API_URL}/api/songs/${id}`, {
      method: "DELETE",
    });
    const filteredSongs = songs.filter((song) => song.id !== id);
    setSongs(filteredSongs);
  }

  return (
    <div>
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <hr />
      <AddSongCard addSong={addSong} playlistId={Number(id)}></AddSongCard>
      <h2>Songs</h2>
      <SongCard songs={songs} deleteSong={deleteSong}></SongCard>
    </div>
  );
}

export default Song;
