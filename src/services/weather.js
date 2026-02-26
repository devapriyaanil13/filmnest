import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Get Weather by Country or City
export const getWeather = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};