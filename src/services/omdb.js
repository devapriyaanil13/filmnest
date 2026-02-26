import axios from "axios";

const API_KEY = "";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}`
  );
  return res.data.Search || [];
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}`
  );
  return res.data;
};