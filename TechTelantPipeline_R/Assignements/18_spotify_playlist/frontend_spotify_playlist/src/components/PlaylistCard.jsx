function PlaylistCard({ playlist }) {
  return (
    <div className="playlist-card">
      <h2 className="playlist-name">{playlist.name}</h2>
      <p className="playlist-des">{playlist.description}</p>
    </div>
  );
}

export default PlaylistCard;
