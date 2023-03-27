import { Link } from "react-router-dom";
import { MovieI } from "../../utils/interfaces";

interface MovieCardProps {
  movie: MovieI;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { id, title, backdrop_path, overview } = movie;

  return (
    <article className="rounded-3xl relative py-4">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={"movie-backdrop-photo"}
          className={"object-cover rounded-3xl"}
        />
        <div className="absolute bottom-8 left-8  w-[80%] space-y-3">
          <span className="text-3xl shadow-2xl">{title}</span>
          <p className="text-xs truncate opacity-80">{overview}</p>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
