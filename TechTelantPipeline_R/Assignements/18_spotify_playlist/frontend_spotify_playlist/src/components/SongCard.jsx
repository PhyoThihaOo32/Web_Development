import { useNavigate } from "react-router";

function SongCard({ songs, deleteSong }) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Back To Playlist</button>
      {songs.map((song) => (
        <ul key={song.id}>
          <li>
            {song.title} {song.artist} {song.duration}
            <button onClick={() => deleteSong(song.id)}>Delete Song</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SongCard;
