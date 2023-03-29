import { MovieI } from "../../utils/interfaces";
import MovieCard from "./movie-card";

const MovieList = ({
  data,
  isLoading,
}: {
  data: MovieI[];
  isLoading: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-4 text-white-default">
      {isLoading ? (
        <p>loading..</p>
      ) : (
        data?.map((movie: MovieI, index: number) => {
          if (!movie.backdrop_path) return;
          return <MovieCard movie={movie} key={`movie-card-${index}`} />;
        })
      )}
    </div>
  );
};

export default MovieList;
