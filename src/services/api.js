import * as omdb from "./omdb";
import * as tvmaze from "./tvmaze";
import * as youtube from "./youtube";
import * as news from "./news";
import * as weather from "./weather";

export const API = {
  movies: {
    search: omdb.searchMovies,
    details: omdb.getMovieDetails,
  },

  tv: {
    search: tvmaze.searchShows,
  },

  trailer: youtube.getTrailer,

  news: {
    entertainment: news.getEntertainmentNews,
  },

  weather: {
    current: weather.getWeather,
  },
};