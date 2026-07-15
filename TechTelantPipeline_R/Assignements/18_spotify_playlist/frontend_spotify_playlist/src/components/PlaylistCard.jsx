function PlaylistCard({ playlist, handleDelete }) {
  return (
    <div className="playlist-card">
      <h2 className="playlist-name">{playlist.name}</h2>
      <p className="playlist-des">{playlist.description}</p>
      <button onClick={() => handleDelete(playlist.id)}>Delete</button>
    </div>
  );
}

export default PlaylistCard;
