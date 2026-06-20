function MovieCard({ movie, onToggle }) {
  let status;
  let label;
  if (movie.watched) {
    status = "Watched";
    label = "Mark as Unwatched";
  } else {
    status = "Not Watched";
    label = "Mark as Watched";
  }
  return (
    <div>
      <p> {movie.watched ? "Watched" : "Not Watched"}</p>
      <p>
        {movie.title} {movie.genre} {movie.year}
      </p>
      <button onClick={() => onToggle(movie.id)}>{label}</button>
    </div>
  );
}

export default MovieCard;
