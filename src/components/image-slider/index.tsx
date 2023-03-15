import { useState } from "react";
import { MovieI } from "../../utils/interfaces";

const ImageSlider = ({
  data,
  genres,
}: {
  data: MovieI[];
  genres: { id: number; name: string }[];
}) => {
  const [index, setIndex] = useState<number>(0);
  setTimeout(() => {
    if (index < data.length) {
      setIndex(index + 1);
    } else setIndex(0);
  }, 6000);
  const { backdrop_path, title, genre_ids } = data[index];

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
        <figcaption className="flex flex-col space-y-2 justify-center text-center bg-gradient-to-t from-black w-full h-1/3 p-5 duration-1000">
          <span className="text-3xl text-white font-bold">{title}</span>
          <span className=" text-slate-300 text-xs font-extralight">
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
        </figcaption>
      </figure>
    </article>
  );
};

export default ImageSlider;
