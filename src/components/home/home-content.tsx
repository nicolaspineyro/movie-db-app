import { useQuery } from "react-query";
import { getPopular, getTrending, getTrendingPerson } from "../../api/movies";
import { getInitials } from "../../utils/helpers";
import { GenresI, PersonI } from "../../utils/interfaces";
import CardsLayout from "../cards-layout";

const HomeContent = ({ genres }: { genres: GenresI[] }) => {
  const { data: popularMoviesData, isLoading } = useQuery(["getPopular"], () =>
    getPopular()
  );
  const { data: trendingData, isLoading: trendingLoading } = useQuery(
    ["getTrendingPerson"],
    () => getTrendingPerson()
  );

  if (!popularMoviesData || !trendingData) {
    return <></>;
  }
  return (
    <section className="text-gray-dark py-10 space-y-5">
      <div className="px-4">
        <span className="text-2xl font-bold">Now Playing Movies</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
      <div className="">
        <span className="text-2xl font-bold px-4 py-5">Explore by genre</span>
        <div className="flex overflow-scroll space-x-3 scrollbar-hide items-center">
          {genres.map(({ name }, index) => (
            <span
              key={`genre-${index}`}
              className="px-5 py-2 w-auto rounded-3xl border-2 border-gray-dark font-semibold"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4">
        <span className="text-2xl font-bold">Popular Movies</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
      <div className="px-4 space-y-4">
        <span className="text-2xl font-bold">Explore by Person</span>
        <div
          className={"flex overflow-scroll gap-7 items-center scrollbar-hide"}
        >
          {trendingData?.map(({ profile_path, name }: PersonI, index) => {
            return (
              <div
                key={`cast-${index}`}
                className={
                  "flex-shrink-0 space-y-4 items-center justify-center"
                }
              >
                {profile_path ? (
                  <img
                    className="h-24 w-24 object-cover object-center rounded-full mx-auto"
                    src={`${import.meta.env.VITE_BASE_IMG_URL}${profile_path}`}
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-gray-300 text-3xl flex mx-auto">
                    <span className="m-auto">
                      {getInitials(name).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="text-sm text-gray-medium">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
