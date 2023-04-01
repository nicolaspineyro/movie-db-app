import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getNowPlaying, getTrending, getUpcomming } from "../../api/movies";
import { GenresI, MovieI } from "../../utils/interfaces";
import { MovieDataBaseIcon } from "../icons";

const ImageSlider = ({ genres }: { genres: GenresI[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["getTrending"],
    () => getTrending("all"),
    {
      retry: false,
    }
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

  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    genre_ids,
    tagline,
    vote_average,
    id,
  } = data[index];

  return (
    <article className="w-full h-[70vh] px-5 py-2">
      <figure
        className="w-full h-full will-change-contents transition-opacity shadow-2xl overflow-hidden bg-center bg-cover bg-no-repeat flex flex-col justify-end duration-1000 sm:hidden rounded-xl"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_IMG_URL
          }${backdrop_path})`,
        }}
      >
        <figcaption className="flex text-white-default flex-col space-y-2  will-change-contents transition-opacity  justify-center w-full bg-gradient-to-t from-black via-black py-10 px-5 duration-1000">
          <Link to={`movie/${id}`}>
            <span className="text-3xl font-bold">{title}</span>
          </Link>

          <div className="flex flex-col b space-y-4">
            <div className="flex space-x-3">
              <span className="text-gray-300 text-xs font-extralight">
                {
                  genres?.find(
                    (genre) => genre_ids && genre.id === genre_ids[0]
                  )?.name
                }
              </span>
            </div>
            <span className="text-gray-300 text-md line-clamp-3">
              {overview}
            </span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default ImageSlider;
