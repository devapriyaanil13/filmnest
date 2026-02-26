import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Get Trailer Video
export const getTrailer = async (title) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: "snippet",
        q: `${title} official trailer`,
        type: "video",
        maxResults: 1,
        key: API_KEY,
      },
    });

    return response.data.items[0];
  } catch (error) {
    console.error("YouTube API error:", error);
    throw error;
  }
};