import { FaFilm, FaHeartBroken } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavButton from "../components/ui/fav-button";
import { StateI } from "../utils/interfaces";
import { save } from "../utils/redux/slices/favoritesSlice";

const Favorites = () => {
  const { favoritesArray } = useSelector((state: StateI) => state.favorites);
  const dispatch = useDispatch();
  const deleteFromFavorites = (id: number) => {
    const newState = favoritesArray.filter(({ id: movieId }) => movieId !== id);
    dispatch(save(newState));
  };
  return (
    <section className="text-center space-y-5 mx-5">
      <span className="text-2xl">Favorite Movies</span>
      {!favoritesArray.length ? (
        <div className="">
          <span className="block">No favorites, let's add some!</span>
          <button
            className={`rounded-xl bg-white text-red-default transition-all duration-300 ease-linear shadow-lg p-4`}
          >
            <Link to={"/"}>
              <FaFilm />
            </Link>
          </button>
        </div>
      ) : (
        favoritesArray.map(({ poster_path, id }) => (
          <div>
            <Link to={`/movie/${id}`} className={"relative"}>
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={"movie-poster"}
                className="rounded-2xl"
              />
            </Link>
            <button
              className="px-3 py-4 mx-auto my-5 rounded-xl bg-red-default text-white flex items-center"
              onClick={() => deleteFromFavorites(id)}
            >
              Remove from favorites <FaHeartBroken className="ml-3" />
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default Favorites;
