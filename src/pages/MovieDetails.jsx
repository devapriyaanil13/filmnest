import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../services/api";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    const details = await API.movies.details(id);
    const trailerData = await API.trailer(details.Title);

    setMovie(details);
    setTrailer(trailerData);
  };

  if (!movie) return null;

  return (
    <div className="details">
      <img src={movie.Poster} />

      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>

        {trailer && (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;