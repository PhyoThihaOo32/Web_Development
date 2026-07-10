function MovieCard({ movie, onToggle, remove }) {
  let label;
  // if (movie.watched) {
  //   label = "Mark as Unwatched";
  // } else {
  //   label = "Mark as Watched";
  // }
  return (
    <div>
      <p> {movie.watched ? "Watched" : "Not Watched"}</p>
      <p>
        {movie.title} {movie.genre} {movie.year}
      </p>
      <button onClick={() => onToggle(movie.id)}>
        {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
      </button>
      <button className="remove-btn" onClick={() => remove(movie.id)}>
        Remove
      </button>
    </div>
  );
}

export default MovieCard;

/**
 * What are props? Props are how you pass information from one component to another. They work like function parameters.

Hint: Your function will receive props as an object. You can pull out just the movie key by writing { movie } inside the parentheses: function MovieCard({ movie }). This is called destructuring — it might look unusual, but it is just a shortcut for const movie = props.movie.

Gotcha: If you see "Cannot read properties of undefined", it usually means movie is not arriving as a prop. Check how you are calling <MovieCard /> in the next step.
 */
