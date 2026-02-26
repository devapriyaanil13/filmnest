import { useState } from "react";
import { API } from "../services/api";
import MovieCard from "../components/MovieCard";
import "./Explore.css";

function Explore() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      if (!query.trim()) return;

      setLoading(true);
      setError(null);

      const results = await API.movies.search(query);

      console.log("Search Results:", results); // Debug

      setMovies(results || []);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="explore">
      <h1 className="explore-title">🔎 Explore Movies</h1>

      {/* Search Form */}
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Search movies like Batman, Titanic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <p className="status-text">Loading...</p>}

      {/* Error */}
      {error && <p className="error-text">{error}</p>}

      {/* No Results */}
      {!loading && movies.length === 0 && query && (
        <p className="status-text">No results found.</p>
      )}

      {/* Movie Grid */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Explore;