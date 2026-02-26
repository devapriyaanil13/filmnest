import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Watchlist.css";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedMovies);
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("watchlist", JSON.stringify(updatedList));
  };

  return (
    <div className="container watchlist-page">

      <h2 className="watchlist-title">My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p className="empty-text">
          Your watchlist is empty.  
          <br />
          <Link to="/explore" className="explore-link">
            Browse movies
          </Link>
        </p>
      ) : (
        <div className="row">
          {watchlist.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card movie-card h-100 text-white">

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />

                <div className="card-body">
                  <h6 className="card-title">{movie.title}</h6>

                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}