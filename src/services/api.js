import * as omdb from "./tmdb";
import * as tvmaze from "./tvmaze";
import * as youtube from "./youtube";
import * as news from "./news";
import * as weather from "./weather";

export const API = {
  movies: {
    search: omdb.searchMovies,        
    trending: omdb.getTrendingMovies
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