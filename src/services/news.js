import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_KEY;;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// Entertainment News
export const getEntertainmentNews = async () => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        category: "entertainment",
        apiKey: API_KEY,
        country: "us",
      },
    });

    return res.data.articles;
  } catch (error) {
    console.error("News API Error:", error);
    throw error;
  }
};