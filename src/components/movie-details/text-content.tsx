import { useQuery } from "react-query";
import { getReviews } from "../../api/movies";
import { capitalize, capitalizeWords } from "../../utils/helpers";
import { MovieI } from "../../utils/interfaces";
import { MovieDataBaseIcon } from "../icons";

const TextContent = ({ data, id }: { data: MovieI; id: string }) => {
  const { data: reviews, isLoading } = useQuery(
    "getMovieReviews",
    () => getReviews(id),
    {
      enabled: !!id,
    }
  );
  const {
    budget,
    original_language,
    original_title,
    revenue,
    runtime,
    homepage,
    overview,
    genres,
    spoken_languages,
    production_companies,
    production_countries,
    vote_average,
    vote_count,
  } = data;
  const dataToDisplay = {
    production_companies,
    production_countries,
    homepage,
    runtime,
    budget,
    original_language,
    original_title,
    revenue,
    spoken_languages,
  };
  return (
    <section className="bg-gray-dark py-5 space-y-5 px-4 ">
      <div className="space-y-4">
        <span className="text-2xl font-semibold">About</span>
        <div className="grid grid-flow-col grid-rows-1 overflow-auto scrollbar-hide gap-5 px-2 mx-4">
          <div className="bg-gray-medium w-full rounded-2xl p-5 w-4/3">
            <div className="flex flex-col">
              <span className="font-semibold text-md">{original_title}</span>
              <span className="text-xs text-gray-light">
                {genres[0]?.name.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-justify">{overview}</p>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <span className="text-2xl font-semibold">Information</span>
        <div className="flex space-x-5 items-center">
          <div className="w-12">
            <MovieDataBaseIcon />
          </div>
          <span className="text-3xl text-gray-light">
            {Math.round(vote_average * 10)}%
          </span>
        </div>
        <div className="flex flex-col space-y-5">
          {Object.entries(dataToDisplay).map(([key, value], index) => {
            const title = capitalizeWords(key.replace("_", " "));
            if (!value) return;

            switch (typeof value) {
              case "string": {
                return (
                  <div key={key}>
                    <p className="text-sm">{title}:</p>
                    <span className="text-sm text-gray-medium">{value}</span>
                  </div>
                );
              }
              case "number": {
                return (
                  <div key={key}>
                    <p className="text-sm">{title}</p>
                    {key === "runtime" ? (
                      <span className="text-sm text-gray-medium">
                        {Math.floor(value / 60)}hr {value % 60} min
                      </span>
                    ) : (
                      <span className="text-sm text-gray-medium">
                        {value.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    )}
                  </div>
                );
              }
              default:
                if (value[0]?.name)
                  return (
                    <div key={key}>
                      <p className="text-sm">{title}</p>
                      <span className="text-sm text-gray-medium">
                        {value[0]?.name}
                      </span>
                    </div>
                  );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TextContent;
