import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

// Search TV Shows
export const searchShows = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/shows`, {
      params: { q: query },
    });

    // TVMaze wraps show inside "show"
    return res.data.map((item) => item.show);
  } catch (error) {
    console.error("TVMaze Error:", error);
    throw error;
  }
};