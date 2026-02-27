import axios from "axios";

const API_KEY = "6f840ca5dc5b5ccffb8763aab52b0115";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const getTrendingMovies = async () => {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/movie/week`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    return res.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? IMAGE_BASE + movie.poster_path
        : null,
      rating: movie.vote_average,
    }));
  } catch (error) {
    console.error("TMDB Error:", error);
    return [];
  }
};
export const getMovieTrailer = async (id) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/videos`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    const trailer = res.data.results.find(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube"
    );

    return trailer
      ? `https://www.youtube.com/embed/${trailer.key}`
      : null;
  } catch (error) {
    console.error("TMDB Trailer Error:", error);
    return null;
  }
};