import { useEffect, useState } from "react";
import { API } from "../services/api";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const movieData = await API.movies.search("Avengers");
    const tvData = await API.tv.search("Breaking");
    const newsData = await API.news.entertainment();
    const weatherData = await API.weather.current("London");

    setMovies(movieData.slice(0, 6));
    setTvShows(tvData.slice(0, 6));
    setNews(newsData.slice(0, 4));
    setWeather(weatherData);
  };

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Discover Movies & Shows</h1>
        <p>Your Premium OTT Discovery Magazine</p>
      </section>

      {/* MOVIES */}
      <section className="section">
        <h2>Trending Movies</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>

      {/* TV SHOWS */}
      <section className="section">
        <h2>Trending TV Shows</h2>
        <div className="movie-grid">
          {tvShows.map((show) => (
            <div key={show.id} className="tv-card">
              <img src={show.image?.medium} />
              <h4>{show.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <h2>Entertainment News</h2>
        <div className="news-grid">
          {news.map((article, i) => (
            <div key={i} className="news-card">
              <img src={article.urlToImage} />
              <p>{article.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WEATHER */}
      {weather && (
        <section className="section">
          <h2>Weather in {weather.name}</h2>
          <p>{weather.main.temp}°C</p>
        </section>
      )}

    </div>
  );
}

export default Home;