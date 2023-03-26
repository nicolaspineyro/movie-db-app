import axios from "axios";

const getLatest = async () => {
  return axios
    .get(`movie/latest`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getNowPlaying = async ({ page }: { page: number }) => {
  return axios
    .get(`movie/now_playing`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY, page },
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

const getDetails = async (id?: string) => {
  return axios
    .get(`movie/${id}`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getImages = async (id?: string) => {
  return axios
    .get(`movie/${id}/images`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getRecommendations = async (id?: string) => {
  return axios
    .get(`movie/${id}/recommendations`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getVideos = async (id?: string) => {
  return axios
    .get(`movie/${id}/videos`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getWatchProviders = async (id?: string) => {
  return axios
    .get(`movie/${id}/watch/providers`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getCredits = async (id?: string) => {
  return axios
    .get(`movie/${id}/credits`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getSimilarMovies = async (id?: string) => {
  return axios
    .get(`movie/${id}/similar`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data);
};

const getMovieDiscover = async ({ with_genres }: { with_genres: number }) => {
  return axios
    .get(`discover/movie`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY, with_genres },
    })
    .then((res) => res.data);
};

export {
  getNowPlaying,
  getGenresList,
  getLatest,
  getTopRated,
  getPopular,
  getDetails,
  getImages,
  getRecommendations,
  getSimilarMovies,
  getWatchProviders,
  getMovieDiscover,
  getVideos,
  getCredits,
};
