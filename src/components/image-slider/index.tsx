import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getNowPlaying } from "../../api/movies";
import { GenresI, MovieI } from "../../utils/interfaces";
import { MovieDataBaseIcon } from "../icons";

const ImageSlider = ({ genres }: { genres: GenresI[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["nowPlayingMovies"],
    () => getNowPlaying({ page }),
    { retry: false }
  );

  setTimeout(() => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setPage(page + 1);
      setIndex(0);
    }
  }, 5000);

  if (!data) {
    return <></>;
  }

  const { poster_path, title, overview, genre_ids, vote_average, id } =
    data[index];

  return (
    <article className="w-full h-[40rem]">
      <figure
        className="w-full h-full bg-center bg-contain bg-no-repeat flex flex-col justify-end duration-700 sm:hidden"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_IMG_URL
          }${poster_path})`,
        }}
      >
        <div className="bg-gradient-to-t from-black via to-transparent h-40 w-full"></div>
        <figcaption className="flex text-white flex-col space-y-2 justify-center text-center from- w-full bg-black h-1/3 p-5 duration-1000">
          <Link to={`movie/${id}`}>
            <span className="text-3xl font-bold">{title}</span>{" "}
          </Link>

          <div className="flex pb-5 flex-col justify-center items-center space-y-4">
            <div className="flex space-x-3">
              <span className="text-gray-300 text-xs font-extralight">
                {
                  genres?.find(
                    (genre) => genre_ids && genre.id === genre_ids[0]
                  )?.name
                }
              </span>
              <div className="flex items-center space-x-2">
                <div className={"w-8"}>
                  <MovieDataBaseIcon />
                </div>
                <span className="text-gray-300 text-xs font-extralight">
                  {vote_average}
                </span>
              </div>
            </div>
            <span className="text-gray-300 text-md line-clamp-3 text-justify">
              {overview}
            </span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default ImageSlider;
