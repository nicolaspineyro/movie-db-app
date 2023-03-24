import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../api/movies";
import { MovieI, StateI } from "../../utils/interfaces";
import { save } from "../../utils/redux/slices/favoritesSlice";
import FavButton from "../ui/fav-button";

const MovieDetailsContent = () => {
  // const { favoritesArray } = useSelector((state: StateI) => state.favorites);

  // const dispatch = useDispatch();
  const { id } = useParams();
  // const favoriteMovie = favoritesArray.some(
  //   ({ id: movieId }) => movieId === parseInt(id)
  // );

  const { data, isLoading } = useQuery("getDetails", () => getDetails(id), {
    enabled: !!id,
  });

  // const saveToFavorites = () => {
  //   let newState;
  //   if (favoriteMovie) {
  //     newState = favoritesArray.filter(
  //       ({ id: movieId }) => movieId !== parseInt(id)
  //     );
  //   } else {
  //     newState = [
  //       ...favoritesArray,
  //       { id, poster_path, backdrop_path, title, vote_average },
  //     ];
  //   }

  //   dispatch(save(newState));
  // };

  if (!data) return <></>;

  const {
    backdrop_path,
    production_companies,
    title,
    genre_ids,
    release_date,
    poster_path,
    overview,
    runtime,
    vote_average,
  }: MovieI = data;

  const date = new Date(release_date).getFullYear();

  return (
    <section className="text-white">
      {/* <div className="relative"> */}
      <div
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_IMG_URL
          }${poster_path})`,
        }}
        className="h-[80vh] bg-center bg-cover flex items-end"
      >
        <div className="px-8 space-y-4 bg-gradient-to-t from-black via-black to-transparent py-40">
          <div className="flex justify-center items-center flex-col">
            <span>{date}</span>
            <button className="bg-black mix-blend-plus-lighter py-4 w-full rounded-xl">
              Add to Favorites
            </button>
          </div>
          <p className="text-md line-clamp-3 ">{overview}</p>
        </div>
      </div>

      {/* <span className="absolute bottom-3 left-3" onClick={saveToFavorites}>
          <FavButton initialState={favoriteMovie} />
        </span> */}
      {/* </div> */}

      {/* <article className="text-center space-y-5 rounded-3xl p-5">
        <span className="text-4xl">{title}</span>
        <div className="space-y-5">
          <div className="flex justify-center">
            <span>Plot:</span>
            <p>{overview}</p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 text-xs">
            <div className="flex justify-center space-x-2">
              <span>Runtime:</span>
              <p>{runtime} minutes</p>
            </div>
            <div className="flex justify-center space-x-2">
              <span> Vote Average:</span>
              <p className="flex items-center">
                {vote_average}
                <FaStar className="mx-2" />
              </p>
            </div>
            <div className="flex justify-center space-x-2">
              <span>Genres:</span>
              {genres?.map(({ id, name }) => (
                <p key={`genre-${id}`}>{name}</p>
              ))}
            </div>
          </div>
          <div>
            <span>Production Companies</span>
            <div className="flex flex-col justify-center space-y-5 py-3 rounded-3xl">
              {production_companies?.map(({ id, name, logo_path }) => {
                if (!logo_path) return;
                return (
                  <img
                    key={`production-${id}`}
                    src={`https://image.tmdb.org/t/p/original/${logo_path}`}
                    className={"h-14 object-contain will-change-auto"}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </article> */}
    </section>
  );
};

export default MovieDetailsContent;
