import axios from "axios";

const getNowPlaying = async () => {
  return axios
    .get(`movie/now_playing`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

const getGenresList = async () => {
  return axios
    .get(`genre/movie/list`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.genres);
};

const getTopRated = async () => {
  return axios
    .get(`movie/top_rated`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getPopular = async () => {
  return axios
    .get(`movie/popular`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getDetails = async (id: string) => {
  return axios
    .get(`movie/${id}`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

export { getNowPlaying, getGenresList, getTopRated, getPopular, getDetails };
