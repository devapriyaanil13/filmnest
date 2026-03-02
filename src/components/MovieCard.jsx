import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imageUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}

export default MovieCard;