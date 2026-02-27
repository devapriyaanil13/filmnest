import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const getPopularShows = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/shows`);
    return res.data.slice(0, 12); // first 12 shows
  } catch (error) {
    console.error("TVMaze Error:", error);
    return [];
  }
};