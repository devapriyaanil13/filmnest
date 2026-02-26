import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <img src={movie.Poster} />
      <h4>{movie.Title}</h4>
    </Link>
  );
}

export default MovieCard;