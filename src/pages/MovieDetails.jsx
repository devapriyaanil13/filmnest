import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../services/tvmaze";
import { getOMDbDetails } from "../services/omdb";
import { getTrailer } from "../services/youtube";
import { getWeather } from "../services/weather";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [ratings, setRatings] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // 1️⃣ TVMaze - Show Details
        const showData = await getShowDetails(id);
        setShow(showData);

        // 2️⃣ OMDb - Ratings
        const omdbData = await getOMDbDetails(showData.name);
        setRatings(omdbData);

        // 3️⃣ YouTube - Trailer
        const trailerData = await getTrailer(showData.name);
        setTrailer(trailerData);

        // 4️⃣ Weather - Based on Country
        if (showData.network?.country?.name) {
          const weatherData = await getWeather(
            showData.network.country.name
          );
          setWeather(weatherData);
        }

      } catch (error) {
        console.error("MovieDetails error:", error);
      }
    };

    loadData();
  }, [id]);

  if (!show) return <div className="container mt-5">Loading...</div>;

  const image = show.image?.original;

  return (
    <div className="container movie-details">

      <div className="row">

        {/* 🎬 Poster */}
        <div className="col-md-4">
          <img
            src={image}
            alt={show.name}
            className="img-fluid details-poster"
          />
        </div>

        {/* 📖 Details */}
        <div className="col-md-8">

          <h2 className="details-title">{show.name}</h2>

          <div
            className="details-overview"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />

          <p><strong>Premiered:</strong> {show.premiered}</p>
          <p><strong>Status:</strong> {show.status}</p>
          <p><strong>Genres:</strong> {show.genres.join(", ")}</p>

          {/* ⭐ Ratings Section */}
          {ratings && (
            <div className="ratings-box mt-4">
              <h5>Ratings</h5>
              <p>IMDb: ⭐ {ratings.imdbRating}</p>
              <p>Runtime: {ratings.Runtime}</p>
              <p>Box Office: {ratings.BoxOffice}</p>
            </div>
          )}

          {/* 🌦 Weather Section */}
          {weather && (
            <div className="weather-box mt-4">
              <h5>Current Weather in {weather.name}</h5>
              <p>🌡 {weather.main.temp}°C</p>
              <p>☁ {weather.weather[0].description}</p>
            </div>
          )}

          {/* ▶ Trailer Section */}
          {trailer && (
            <div className="trailer-box mt-4">
              <h5>Official Trailer</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.id.videoId}`}
                  title="Trailer"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}