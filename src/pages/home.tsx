import { useState } from "react";
import { useQuery } from "react-query";
import { getGenresList, getNowPlaying } from "../api/movies";
import HomeContent from "../components/home/home-content";
import ImageSlider from "../components/image-slider";
import { MovieI } from "../utils/interfaces";

const Home = () => {
  const { data: genresList, isLoading: genresLoading } = useQuery(
    ["genresList"],
    () => getGenresList(),
    { retry: false }
  );

  if (genresLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ImageSlider genres={genresList} />
      <HomeContent genres={genresList} />
    </>
  );
};

export default Home;
