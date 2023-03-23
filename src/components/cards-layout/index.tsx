import { GenresI, MovieI } from "../../utils/interfaces";

const CardsLayout = ({
  data,
  genres,
}: {
  data: MovieI[];
  genres: GenresI[];
}) => {
  return (
    <div className="grid grid-flow-col grid-rows-3 overflow-auto">
      {data.map(({ title, backdrop_path, release_date, genre_ids }, index) => {
        const date = new Date(release_date).getFullYear();
        const genre = genres?.find(
          (genre) => genre_ids && genre.id === genre_ids[0]
        )?.name;

        return (
          <article className="w-screen text-white py-5 flex">
            <img
              className="w-1/2 rounded-md"
              src={`${import.meta.env.VITE_BASE_IMG_URL}${backdrop_path}`}
            />
            <div className="flex items-center space-x-4 mx-3">
              <span className="text-gray-600">{index + 1}</span>
              <div className="font-light text-xs">
                <p>{title}</p>
                <span className="mr-2 text-gray-500">{date} -</span>
                <span className="text-gray-500">{genre}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CardsLayout;
