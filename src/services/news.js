import axios from "axios";

const NEWS_KEY = import.meta.env.VITE_NEWS_KEY;

export const getEntertainmentNews = async () => {
  try {
    const res = await axios.get("https://gnews.io/api/v4/top-headlines", {
      params: {
        category: "entertainment",
        lang: "en",
        country: "in",
        max: 10,
        apikey: NEWS_KEY,
      },
    });

    return res.data.articles;
  } catch (error) {
    console.error("GNews Error:", error);
    return [];
  }
};