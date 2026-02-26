import axios from "axios";

const API_KEY = "YOUR_YOUTUBE_API_KEY";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Get Trailer by Movie Title
export const getTrailer = async (title) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        part: "snippet",
        q: `${title} official trailer`,
        key: API_KEY,
        maxResults: 1,
        type: "video",
      },
    });

    return res.data.items[0];
  } catch (error) {
    console.error("YouTube Error:", error);
    throw error;
  }
};