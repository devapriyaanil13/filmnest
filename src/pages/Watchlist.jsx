import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Watchlist.css";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setMovies(saved);
  }, []);

  return (
    <div className="watchlist">
      <h1>🎬 Your Watchlist</h1>

      {movies.length === 0 ? (
        <p className="empty">No movies saved yet.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;