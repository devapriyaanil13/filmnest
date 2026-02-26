import axios from "axios";

const API_KEY = "d772965a";
const BASE_URL = "https://www.omdbapi.com/";

// Search Movies
export const searchMovies = async (query) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });

    if (res.data.Response === "False") {
      return [];
    }

    return res.data.Search;
  } catch (error) {
    console.error("OMDB Search Error:", error);
    throw error;
  }
};

// Get Movie Details
export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
        plot: "full",
      },
    });

    return res.data;
  } catch (error) {
    console.error("OMDB Details Error:", error);
    throw error;
  }
};