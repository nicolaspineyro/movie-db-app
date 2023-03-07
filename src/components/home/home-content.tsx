import { useState } from "react";
import CategorySearch from "../filters/category-search";
import FiltersMenu from "../filters/filters-menu";
import MovieSearch from "../filters/movie-search";
import PopularMovies from "../filters/popular-movies";

const HomeContent = () => {
  const [selected, setSelected] = useState(0);
  const renderFilters = () => {
    switch (selected) {
      case 0:
        return <PopularMovies selected={selected} />;
      case 1:
        return <CategorySearch selected={selected} />;
      case 2:
        return <MovieSearch />;
      default:
        return (
          <div className="text-xl h-screen">
            <div className="text-center animate-bounce p-10">
              Select a filter
            </div>
          </div>
        );
    }
  };

  return (
    <section className="text-white py-3 px-4 space-y-5">
      <FiltersMenu selected={selected} setSelected={setSelected} />
      {renderFilters()}
    </section>
  );
};

export default HomeContent;
