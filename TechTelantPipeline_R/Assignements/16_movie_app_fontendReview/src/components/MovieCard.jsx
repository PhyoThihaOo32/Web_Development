/**
 * Inside it, make MovieCard.jsx.
 * It takes a movie prop and shows the poster,
 * title, and rating.
 */
import { Link } from "react-router";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐️ {movie.vote_average}</p>
    </Link>
  );
}

export default MovieCard;
