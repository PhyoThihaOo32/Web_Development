/**
 * Inside it, make MovieCard.jsx.
 * It takes a movie prop and shows the poster,
 * title, and rating.
 */

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐️ {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
