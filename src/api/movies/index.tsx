import axios from "axios";

const getNowPlaying = async () => {
  return axios
    .get(`movie/now_playing`, {
      params: { api_key: import.meta.env.VITE_MOVIE_DB_KEY },
    })
    .then((res) => res.data.results);
};

export { getNowPlaying };
