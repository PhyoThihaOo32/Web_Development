import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import StatsBar from "./components/StatsBar";

const initialMovies = [
  { id: 1, title: "The Matrix", genre: "Sci-Fi", year: 1999, watched: false },
  { id: 2, title: "Parasite", genre: "Thriller", year: 2019, watched: false },
  {
    id: 3,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    year: 2022,
    watched: true,
  },
  { id: 4, title: "Knives Out", genre: "Mystery", year: 2019, watched: false },
  { id: 5, title: "Coco", genre: "Animation", year: 2017, watched: true },
  { id: 6, title: "Get Out", genre: "Horror", year: 2017, watched: false },
];

export default function App() {
  // useState -> it is a react tool that lets component remember data
  // when the data changes, react automatically updates what the user sees
  // on the screen.
  const [movies, setMovies] = useState(initialMovies);

  function toggleWatched(id) {
    /**
     * map every movies -> for the movie whose id matches the argument
     * return a copy of its with watched flipped!{...movie, watched: !movie.wathced}
     * if no id match return the movie as it is - and setMovie to re-render
     */
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, watched: !movie.watched };
        }
        return movie;
      }),
    );
  }
  /**
   * Why can't you just do movie.watched = !movie.watched?
   * In React, you are not allowed to change state directly. If you do, React does not know anything changed and the screen will not update. You must always create a new value and pass it to the setter function.
   * Hint: To flip a boolean, use !value. If watched is true, then !watched is false.
   * Hint: To create a copy of an object with one property changed,
   * look into the spread operator: { ...movie } creates a copy of all of movie's properties.
   * You can then add a property after it to override just that one: { ...movie, watched: !movie.watched }.
   * Gotcha: Your .map() must return something for every item — not just the one you are changing.
   * If you forget return for the unchanged movies,
   * the others will disappear from your list.
   */

  /**
   * remove movie from the list
   */
  function removeMovie(id) {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  }

  // hide all unwatched movie
  function hideAllunwatchedMovies() {
    setMovies(movies.filter((movie) => movie.watched));
  }

  const totalMovies = movies.length;
  const watchedMovies = movies.filter((movie) => movie.watched).length;
  const unwatchedMovies = movies.filter((movie) => !movie.watched).length;
  const movieStats = {
    totalMovies,
    watchedMovies,
    unwatchedMovies,
  };
  return (
    <div>
      <h1>Movie Night</h1>
      <StatsBar movies={movieStats} hide={hideAllunwatchedMovies}></StatsBar>

      {/** show each movie
       * The key properity belongs on the outermost element inside the .map().
       * Since <MovieCard /> is now the outermost thing,
       * put key there — not inside MovieCard.jsx.
       */}
      {movies.map((movie) => (
        <>
          <MovieCard
            key={movie.id}
            movie={movie}
            onToggle={toggleWatched}
            remove={removeMovie}
          />
        </>
      ))}
    </div>
  );
}
