export const getPopularMovies = async (query: string) => {
  const endpoint = "https://movieql.netlify.app/graphql";
  const data = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, language: "en" }),
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return data;
};

export const getUpcomingMovies = async (query: string) => {
  const endpoint = "https://movieql.netlify.app/graphql";
  const data = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, language: "en" }),
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return data;
};

export const searchMovie = async (query: string) => {
  const endpoint = "https://movieql.netlify.app/graphql";
  const data = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, language: "en" }),
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return data;
};

export const getMovieDetails = async (query: string) => {
  const endpoint = "https://movieql.netlify.app/graphql";
  const data = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, language: "en" }),
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return data;
};

export const getNowPlayingMovies = async (query: string) => {
  const endpoint = "https://movieql.netlify.app/graphql";
  const data = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, language: "en" }),
  })
    .then((response) => response.json())
    .then((data) => data.data);
  return data;
};
