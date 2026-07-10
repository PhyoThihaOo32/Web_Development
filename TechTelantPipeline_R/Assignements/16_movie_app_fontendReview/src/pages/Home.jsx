/**
 * Make a pages folder. Move the home logic (state, fetch, grid)
 * from App.jsx into pages/Home.jsx
 * and rename the function Home.
 */

import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const key = import.meta.env.VITE_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
    async function loadMovies() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to Load the movies.");
        const data = await response.json();
        // console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  if (loading) return <p style={{ padding: 16 }}>Loading</p>;
  if (error) return <p style={{ padding: 16 }}>Error</p>;

  return (
    <div>
      <h1 style={{ padding: 16 }} className="app-title">
        My Movie WatchList
      </h1>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;
