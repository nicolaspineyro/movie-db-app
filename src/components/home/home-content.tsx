import { useState } from "react";
import { useQuery } from "react-query";
import { getPopular, getTopRated } from "../../api/movies";
import { GenresI } from "../../utils/interfaces";
import CardsLayout from "../cards-layout";
import CategorySearch from "../filters/category-search";
import FiltersMenu from "../filters/filters-menu";
import MovieSearch from "../filters/movie-search";
import PopularMovies from "../filters/popular-movies";

const HomeContent = ({ genres }: { genres: GenresI[] }) => {
  const { data: popularMoviesData, isLoading } = useQuery(["getPopular"], () =>
    getPopular()
  );
  // const [selected, setSelected] = useState(0);
  // const renderFilters = () => {
  //   switch (selected) {
  //     case 0:
  //       return <PopularMovies selected={selected} />;
  //     case 1:
  //       return <CategorySearch selected={selected} />;
  //     case 2:
  //       return <MovieSearch />;
  //     default:
  //       return (
  //         <div className="text-xl h-screen">
  //           <div className="text-center animate-bounce p-10">
  //             Select a filter
  //           </div>
  //         </div>
  //       );
  //   }
  // };

  if (!popularMoviesData) {
    return <></>;
  }

  return (
    <section className="text-white py-3 px-4 space-y-5">
      {/* <FiltersMenu selected={selected} setSelected={setSelected} /> */}
      {/* {renderFilters()} */}
      <div className="">
        <span className="text-xl font-medium">Top Rated Movies</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
    </section>
  );
};

export default HomeContent;
