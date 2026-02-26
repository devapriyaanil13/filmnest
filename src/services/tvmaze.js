import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

// Fetch Popular Shows
export const fetchShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shows`);
    return response.data.slice(0, 20); // limit results
  } catch (error) {
    console.error("TVMaze fetchShows error:", error);
    throw error;
  }
};

// Search Shows
export const searchShows = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/shows?q=${query}`
    );
    return response.data.map((item) => item.show);
  } catch (error) {
    console.error("TVMaze searchShows error:", error);
    throw error;
  }
};

// Get Show Details
export const getShowDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("TVMaze getShowDetails error:", error);
    throw error;
  }
};