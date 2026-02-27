import axios from "axios";

const API_KEY = "fd62a41e6d6326fde103e65fe6af7e33";
const BASE_URL = "https://gnews.io/api/v4/search";

export const getEntertainmentNews = async () => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: "entertainment",   // ✅ MUST use q
        lang: "en",
        country: "us",
        max: 6,
        apikey: API_KEY       // ✅ lowercase apikey
      },
    });

    return res.data.articles || [];
  } catch (error) {
    console.error("GNews API Error:", error);
    return [];   // ❗ DO NOT throw
  }
};