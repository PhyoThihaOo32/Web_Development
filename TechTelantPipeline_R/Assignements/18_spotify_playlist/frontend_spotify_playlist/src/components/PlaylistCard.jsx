import { Link } from "react-router";

function PlaylistCard({ playlist, deletePlaylist }) {
  return (
    <>
      <div className="playlist-card">
        <h2 className="playlist-name">{playlist.name}</h2>
        <p className="playlist-des">{playlist.description}</p>
        <Link to={`/api/playlist/${playlist.id}`} key={playlist.id}>
          <p>Detail</p>
        </Link>
        <button onClick={() => deletePlaylist(playlist.id)}>Delete</button>
      </div>
    </>
  );
}

export default PlaylistCard;
