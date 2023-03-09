import { useState } from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "../api/movies";
import HomeContent from "../components/home/home-content";
import HomeSlider from "../components/home/home-slider";

const Home = () => {
  const { data: nowPlayingMovies, isLoading } = useQuery(
    "nowPlayingMovies",
    () => getNowPlaying(),
    { retry: false }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HomeSlider data={nowPlayingMovies} />
      {/* <HomeContent /> */}
    </>
  );
};

export default Home;
