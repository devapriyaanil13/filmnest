import axios from "axios";

// Open-Meteo (No API Key Required)
export const getWeather = async (city = "London") => {
  try {
    // Step 1: Convert city name to coordinates
    const geoRes = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      {
        params: {
          name: city,
          count: 1,
        },
      }
    );

    if (!geoRes.data.results) return null;

    const { latitude, longitude } = geoRes.data.results[0];

    // Step 2: Get weather using coordinates
    const weatherRes = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude,
          longitude,
          current_weather: true,
        },
      }
    );

    return weatherRes.data.current_weather;
  } catch (error) {
    console.error("Open-Meteo Error:", error.message);
    return null; // NEVER throw
  }
};