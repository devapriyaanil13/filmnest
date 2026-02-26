import { useState } from "react";
import { searchShows } from "../services/tvmaze";
import { getOMDbDetails } from "../services/omdb";
import MovieCard from "../components/MovieCard";
import "./Explore.css";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const results = await searchShows(query);

      // 🔥 Enhance each show with IMDb rating from OMDb
      const enhancedResults = await Promise.all(
        results.slice(0, 12).map(async (show) => {
          try {
            const omdbData = await getOMDbDetails(show.name);
            return {
              ...show,
              imdbRating: omdbData.imdbRating,
            };
          } catch {
            return show;
          }
        })
      );

      setShows(enhancedResults);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container explore-page">

      <h2 className="explore-title">Search Shows</h2>

      {/* 🔍 Search Bar */}
      <div className="input-group search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search TV shows..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <p className="status-text">Searching...</p>}

      {/* 🎬 Results */}
      <div className="row">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} />
        ))}
      </div>

    </div>
  );
}