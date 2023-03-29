import { Link } from "react-router-dom";
import { GenresI, MovieI } from "../../utils/interfaces";

const CardsLayout = ({
  data,
  genres,
}: {
  data: MovieI[];
  genres: GenresI[];
}) => {
  return (
    <div className="grid grid-flow-col grid-rows-3 overflow-auto scrollbar-hide">
      {data.map(
        ({ title, backdrop_path, release_date, genre_ids, id }, index) => {
          const date = new Date(release_date).getFullYear();
          const genre = genres?.find(
            (genre) => genre_ids && genre.id === genre_ids[0]
          )?.name;

          return (
            <Link
              to={`/movie/${id}`}
              key={`movie-card-${index}`}
              className={"border-b-[0.5px] border-gray-dark mx-5"}
            >
              <article className="w-screen text-gray-dark py-5 flex">
                <img
                  className="w-1/2 rounded-md"
                  src={`${import.meta.env.VITE_BASE_IMG_URL}${backdrop_path}`}
                />
                <div className="flex items-center space-x-4 mx-4">
                  <span className="text-gray-600">{index + 1}</span>
                  <div className="font-light text-xs h-full flex flex-col justify-center">
                    <p>{title}</p>
                    <div>
                      <span className="text-gray-500">{date} - </span>
                      <span className="text-gray-500">{genre}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        }
      )}
    </div>
  );
};

export default CardsLayout;
