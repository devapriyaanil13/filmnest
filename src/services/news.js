import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// Get Entertainment News
export const getEntertainmentNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        category: "entertainment",
        language: "en",
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error("News API error:", error);
    throw error;
  }
};