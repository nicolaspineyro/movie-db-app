import { SetStateAction, useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "react-query";
import { searchMovie } from "../../utils/api/movies";
import debounce from "lodash.debounce";
import { MovieI } from "../../utils/interfaces";
import MovieCard from "../home/movie-card";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
    setSearch(e.target.value);
  const query = `{
      searchMovie(term:"${search}") {
          id,
          poster_path,
          backdrop_path,
          title,
          overview,
          release_date,
          vote_average,
        }
      }`;

  const {
    data: searchMovieData,
    isLoading,
    refetch,
  } = useQuery("searchMovie", () => searchMovie(query), {
    enabled: !!search.length,
  });

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
  }, []);

  useEffect(() => {
    if (!!search.length) {
      refetch();
    }
  }, [search]);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  return (
    <section className="mx-4">
      <div className="bg-white rounded-xl flex py-2 text-black items-center shadow-xl">
        <FaSearch className="mx-4" />
        <input
          type="text"
          onChange={debouncedResults}
          className={"bg-transparent appearance-none focus:outline-none w-full"}
        />
      </div>
      <div>
        {isLoading ? (
          <p>loading..</p>
        ) : !searchMovieData?.searchMovie?.length && search.length ? (
          <p>No results</p>
        ) : (
          searchMovieData?.searchMovie?.map((movie: MovieI, index: number) => {
            if (!movie.backdrop_path) return;
            return <MovieCard movie={movie} key={`movie-card-${index}`} />;
          })
        )}
      </div>
    </section>
  );
};

export default MovieSearch;
