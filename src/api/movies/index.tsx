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

const getMovieDiscover = async (params: {
  with_genres?: number;
  with_people?: string;
}) => {
  return axios
    .get(`discover/movie`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY, ...params },
    })
    .then((res) => res.data);
};

const getUpcomming = async () => {
  return axios
    .get(`movie/upcoming`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

const getReviews = async (id?: string) => {
  return axios
    .get(`movie/${id}/reviews`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

const getTrending = async (search: string) => {
  return axios
    .get(`trending/${search}/week`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

const getTrendingPerson = async () => {
  return axios
    .get(`trending/person/week`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

const multiSearch = async (query: string) => {
  return axios
    .get(`search/multi`, {
      params: {
        api_key: import.meta.env.VITE_MOVIE_DB_KEY,
        query,
        include_adult: false,
      },
    })
    .then((res) => res.data.results);
};

const getPerson = async (id?: string) => {
  return axios
    .get(`person/${id}`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
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
  getPerson,
  getCredits,
  getUpcomming,
  getTrending,
  getReviews,
  multiSearch,
  getTrendingPerson,
};
