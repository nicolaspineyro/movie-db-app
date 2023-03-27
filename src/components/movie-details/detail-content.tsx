import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { capitalize } from "../../utils/helpers";
import { MovieI } from "../../utils/interfaces";

const DetailContent = ({
  data,
  images,
}: {
  data: MovieI;
  images: any[];
  id: string;
}) => {
  const [showMore, setShowMore] = useState(false);
  if (!data || !images) return <></>;

  const {
    backdrop_path,
    title,
    genres,
    release_date,
    tagline,
    overview,
    runtime,
    spoken_languages,
    original_language,
  }: MovieI = data;

  const date = new Date(release_date).getFullYear();
  const genre = genres ? genres[0]?.name : "";
  const logoPath = images?.logos.find(({ iso_639_1 }: { iso_639_1: string }) =>
    iso_639_1 === "en" ? true : iso_639_1 === original_language
  )?.file_path;
  const language = spoken_languages?.find(
    (language) => language.iso_639_1 === original_language
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASE_IMG_URL
          }${backdrop_path})`,
        }}
        className="h-[45vh] bg-center bg-cover flex items-end "
      >
        <div className="bg-gradient-to-t from-white to-transparent h-20 w-full"></div>
      </div>
      <div className="px-4 space-y-4 w-full py-5">
        <div className="flex space-y-4 justify-center items-center flex-col">
          {logoPath ? (
            <img
              alt={"movie-logo"}
              src={`${import.meta.env.VITE_BASE_IMG_URL}${logoPath}`}
            />
          ) : (
            <h1 className="text-3xl font-bold text-center">{title}</h1>
          )}

          <span className="text-center text-gray-dark">{tagline}</span>

          <ul className="text-xs text-gray-dark text-center space-x-2 flex">
            <li>{genre}</li>
            <li>{date}</li>
            <li>
              {Math.floor(runtime / 60)}hr {runtime % 60} min
            </li>
            {language?.english_name && (
              <li className="space-x-1">
                <span>{capitalize(language?.english_name)}</span>
                {spoken_languages.length > 1 ? (
                  <span>+{spoken_languages.length - 1}</span>
                ) : (
                  <></>
                )}
              </li>
            )}
          </ul>

          <button className="bg-gray-dark space-x-3 flex items-center justify-center text-white py-3  px-8 text-lg font-medium rounded-lg">
            <BsPlus />
            <span>Add to Favorites</span>
          </button>
        </div>
        <div className="flex flex-col text-gray-dark">
          <p
            className={`text-md transition-all text-justify ${
              showMore ? "" : "line-clamp-3"
            }`}
          >
            {overview}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-xs self-end text-gray-dark"
          >
            {`Show ${showMore ? "Less" : "More"}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailContent;
