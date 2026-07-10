function StatsBar({ movies, hide }) {
  return (
    <p>
      Total: {movies.totalMovies} | Watched: {movies.watchedMovies} | Not
      watched yet:
      {movies.unwatchedMovies}
      <button onClick={hide}>Hide Unwatched Movies</button>
    </p>
  );
}

export default StatsBar;
