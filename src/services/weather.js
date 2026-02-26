import axios from "axios";

const API_KEY = "YOUR_OPENWEATHER_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Get Weather by City
export const getWeather = async (city) => {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Weather API Error:", error);
    throw error;
  }
};