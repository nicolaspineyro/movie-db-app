import { useQuery } from "react-query";
// import { getPopularMovies, getUpcomingMovies } from "../../api/movies";
import { MovieI } from "../../utils/interfaces";
import MovieCard from "../home/movie-card";

const PopularMovies = ({ selected }: { selected: number }) => {
  // const { data: popularMoviesData, isLoading } = useQuery(
  //   "getPopularMovies",
  //   () => getPopularMovies(query)
  // );
  return (
    <div className="grid grid-cols-auto px-4 sm:grid-cols-2">
      {/* {isLoading ? (
        <p>loading..</p>
      ) : (
        popularMoviesData?.popularMovies?.map(
          (movie: MovieI, index: number) => {
            if (!movie.backdrop_path) return;
            return <MovieCard movie={movie} key={`movie-card-${index}`} />;
          }
        )
      )} */}
    </div>
  );
};

export default PopularMovies;
