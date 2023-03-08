import { useState } from "react";
import { useQuery } from "react-query";
import { getNowPlaying } from "../api/movies";
import HomeContent from "../components/home/home-content";

const Home = () => {
  const { data, isLoading } = useQuery(
    "nowPlayingMovies",
    () => getNowPlaying(),
    { retry: false }
  );

  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // const carouselImages = data?.nowPlayingMovies
  //   ?.map(({ poster_path }: { poster_path: string }) => poster_path)
  //   ?.filter((poster_path: string) => poster_path);

  return (
    <section>
      {/* <img
        src={`https://image.tmdb.org/t/p/original/${carouselImages[currentIndex]}`}
        alt={"movie-backdrop-photo"}
        className={"h-[30rem] object-center mx-auto my-6 rounded-xl md:h-auto"}
      /> */}
      {/* <HomeContent /> */}
    </section>
  );
};

export default Home;
