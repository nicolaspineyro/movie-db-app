import { useState } from "react";
import { useQuery } from "react-query";
import HomeContent from "../components/home/home-content";
import { getNowPlayingMovies, getPopularMovies } from "../utils/api/movies";

const Home = () => {
  const { data, isLoading } = useQuery("nowPlayingMovies", () =>
    getNowPlayingMovies(query)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  setTimeout(
    () => setCurrentIndex(currentIndex === 19 ? 0 : currentIndex + 1),
    10000
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const carouselImages = data?.nowPlayingMovies
    ?.map(({ poster_path }: { poster_path: string }) => poster_path)
    ?.filter((poster_path: string) => poster_path);

  return (
    <section className="overscroll-none">
      <img
        src={`https://image.tmdb.org/t/p/original/${carouselImages[currentIndex]}`}
        alt={"movie-backdrop-photo"}
        className={"h-[30rem] object-center mx-auto my-6 rounded-xl md:h-auto"}
      />
      <HomeContent />
    </section>
  );
};

const query = `{
    nowPlayingMovies {
        id,
        poster_path,
        backdrop_path,
        title,
        overview,
        release_date,
        vote_average,
      }
    }`;

export default Home;
