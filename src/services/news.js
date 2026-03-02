import axios from "axios";

export const getEntertainmentNews = async () => {
  try {
    const API_KEY = import.meta.env.VITE_NEWSDATA_KEY;

    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=entertainment&country=in&language=en`;

    const res = await axios.get(url);

    return (res.data.results || []).map(item => ({
      title: item.title,
      description: item.description,
      image: item.image_url || item.thumbnail || "https://via.placeholder.com/400x250?text=No+Image",
      url: item.link
    }));

  } catch (error) {
    console.error("NewsData Error:", error);
    return [];
  }
};