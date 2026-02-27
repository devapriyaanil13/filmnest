import * as tmdb from "./tmdb";
import * as tvmaze from "./tvmaze";
import * as youtube from "./youtube";
import * as news from "./news";
import * as weather from "./weather";

export const API = {
  movies: {
    trending: tmdb.getTrendingMovies,
    details: tmdb.getMovieDetails,
    trailer: tmdb.getMovieTrailer,
  },

  tv: {
    popular: tvmaze.getPopularShows,
  },

  trailer: youtube.getTrailer,

  news: {
    entertainment: news.getEntertainmentNews,
  },

  weather: {
    current: weather.getWeather,
  },
};