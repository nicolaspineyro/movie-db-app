import { useState } from "react";
import { MovieI } from "../../utils/interfaces";

const HomeSlider = ({ data }: { data: MovieI[] }) => {
  const [index, setIndex] = useState<number>(0);
  setTimeout(() => {
    if (index < data.length) {
      setIndex(index + 1);
    } else setIndex(0);
  }, 6000);
  return (
    <article className="w-full h-[37rem]">
      <div
        className="w-full h-full bg-center bg-cover duration-700 sm:hidden"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_IMG_URL}${
            data[index]?.poster_path
          })`,
        }}
      ></div>
      <div
        className="hidden w-full h-full bg-cover  duration-700 sm:block"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_IMG_URL}${
            data[index]?.backdrop_path
          })`,
        }}
      ></div>
    </article>
  );
};

export default HomeSlider;
