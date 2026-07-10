/**
 * Make pages/MovieDetail.jsx. Read the id with useParams,
 * fetch that one movie, and show its details.
 * Add a Back button with useNavigate.
 */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

// useParams -> return obj of key/value pair
// useNavigate ->

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect is a React Hook that runs code
  // after the component renders.

  useEffect(() => {
    const key = import.meta.env.VITE_TMDB_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;

    async function loadMovie() {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    }
    loadMovie();
  }, [id]);

  if (loading) return <p style={{ padding: 6 }}>Loading...</p>;

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate("/")}>← Back</button>
      <h1>{movie.title}</h1>
      <p>
        ⭐ {movie.vote_average} · {movie.release_date}
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: 8, marginTop: 12, maxWidth: 300 }}
      />
      <p style={{ marginTop: 12 }}>{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
