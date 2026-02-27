import { useEffect, useState } from "react";
import { API } from "../services/api";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);

    try {
      const movieData = await API.movies.trending();
      setMovies(movieData?.slice(0, 8) || []);
    } catch (err) {
      console.error("Movies Error:", err);
      setMovies([]);
    }

    try {
      const tvData = await API.tv.popular();;
      setShows(tvData?.slice(0, 6) || []);
    } catch (err) {
      console.error("TV Error:", err);
      setShows([]);
    }

    try {
      const newsData = await API.news.entertainment();
      setNews(newsData?.slice(0, 4) || []);
    } catch (err) {
      console.error("News Error:", err);
      setNews([]);
    }

    try {
      const weatherData = await API.weather.current(city);
      setWeather(weatherData || null);
    } catch (err) {
      console.error("Weather Error:", err);
      setWeather(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  }

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Discover Movies & Shows</h1>
        <p>Your personal entertainment dashboard.</p>
      </section>

      

      {/* MOVIES */}
      <section className="section">
        <h2>Trending Movies</h2>

        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div
                key={`${movie.id}-${index}`}
                className="movie-card"
              >
                <img
                  src={
                    movie.poster ||
                    "https://via.placeholder.com/300x450"
                  }
                  alt={movie.title}
                />
                <h4>{movie.title}</h4>
                <p>⭐ {movie.rating}</p>
              </div>
            ))
          ) : (
            <p>No trending movies</p>
          )}
        </div>
      </section>

      <section className="section">
        <h2>Popular TV Shows</h2>

        <div className="movie-grid">
          {shows && shows.length > 0 ? (
            shows.map((item, index) => {
              // Handle both structures
              const show = item.show ? item.show : item;

              if (!show || !show.id) return null;

              return (
                <div
                  key={`${show.id}-${index}`}
                  className="tv-card"
                >
                  <img
                    src={
                      show.image?.medium ||
                      show.image?.original ||
                      "https://via.placeholder.com/300x450"
                    }
                    alt={show.name}
                  />
                  <p>{show.name}</p>
                </div>
              );
            })
          ) : (
            <p>No shows available</p>
          )}
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <h2>Entertainment News</h2>

        <div className="news-grid">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div
                key={`${article.title}-${index}`}
                className="news-card"
              >
                <img
                  src={
                    article.image ||
                    "https://via.placeholder.com/400x200"
                  }
                  alt={article.title}
                />
                <p>{article.title}</p>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      </section>
      {/* WEATHER */}
      {weather && (
        <section className="section">
          <div className="weather-box">
            <h2>Weather in {city}</h2>
            <p>{weather.temperature}°C</p>
            <p>Wind: {weather.windspeed} km/h</p>
          </div>
        </section>
      )}

    </div>
  );
}

export default Home;