import { useEffect, useState } from "react";
import { GenresI, MovieI } from "../../utils/interfaces";
import { MovieDataBaseIcon } from "../icons";

const ImageSlider = ({
  data,
  genres,
}: {
  data: MovieI[];
  genres: GenresI[];
}) => {
  const [index, setIndex] = useState<number>(0);

  const { backdrop_path, title, overview, genre_ids, vote_average } =
    data[index];

  setTimeout(() => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  }, 6000);

  return (
    <article className="w-full h-[37rem]">
      <figure
        className="w-full h-full bg-center bg-cover flex items-end duration-700 sm:hidden"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_IMG_URL
          }${backdrop_path})`,
        }}
      >
        <figcaption className="flex text-white flex-col space-y-2 justify-center text-center bg-gradient-to-t from-black w-full h-1/3 p-5 duration-1000">
          <span className="text-3xl font-bold">{title}</span>
          <div className="flex pb-5 flex-col justify-center items-center space-y-2">
            <span className="text-slate-300 text-xs font-extralight">
              {
                genres?.find((genre) => genre_ids && genre.id === genre_ids[0])
                  ?.name
              }
              {!!genre_ids?.length && genre_ids?.length > 1 && (
                <span className="ml-2 text-slate-500">
                  +{genre_ids?.length - 1}
                </span>
              )}
            </span>
            <div className="flex items-center space-x-2">
              <div className={"w-8"}>
                <MovieDataBaseIcon />
              </div>
              <span className="text-slate-300 text-xs font-extralight">
                {vote_average}
              </span>
            </div>
            <span className="text-slate-300 text-xs line-clamp-3">
              {overview}
            </span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default ImageSlider;
