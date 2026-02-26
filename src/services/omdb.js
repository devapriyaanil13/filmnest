// src/services/omdb.js

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

/**
 * Fetch full movie/show details from OMDb using IMDb ID
 * @param {string} imdbID
 * @returns {Promise<Object|null>}
 */
export async function getOMDbDetails(imdbID) {
  if (!imdbID) {
    console.error("No IMDb ID provided");
    return null;
  }

  try {
    const response = await fetch(
      `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}&plot=full`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch OMDb data");
    }

    const data = await response.json();

    if (data.Response === "False") {
      console.error("OMDb API error:", data.Error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("OMDb fetch error:", error);
    return null;
  }
}