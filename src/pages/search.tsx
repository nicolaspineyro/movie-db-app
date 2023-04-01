import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getPopular, getTrending, multiSearch } from "../api/movies";
import LoadingSpinner from "../components/ui/loading-spinner";
import SearchBar from "../components/ui/search-bar";
import { MovieI } from "../utils/interfaces";

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const {
    data: searchData,
    isLoading: searchLoading,
    refetch: getSearch,
  } = useQuery(["getTrending"], () => multiSearch(search), {
    enabled: false,
    retry: false,
  });

  const { data: trendingData, isLoading: dataLoading } = useQuery(
    ["getTrending"],
    () => getTrending("movie"),
    {
      retry: false,
    }
  );

  const { data: popularData, isLoading: popularLoading } = useQuery(
    ["getPopular  "],
    () => getPopular(),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (search) getSearch();
  }, [search]);

  console.log(searchData);

  if (dataLoading || popularLoading || searchLoading) {
    return (
      <section className="w-full h-full mx-auto">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="w-full h-full bg-white-neutral p-5 space-y-4">
      <SearchBar onChange={setSearch} />
      {search.length ? (
        <div className="flex flex-col space-y-5">
          {searchData?.map(
            (
              { backdrop_path, id, original_title, title }: MovieI,
              index: number
            ) => {
              if (!backdrop_path) return;
              return (
                <Link to={`/movie/${id}`} key={`popular-${index}`}>
                  <img
                    className="rounded-xl w-full shadow-2xl h-[25vh] bg-contain bg-no-repeat bg-center"
                    src={`${import.meta.env.VITE_BASE_IMG_URL}${backdrop_path}`}
                  />
                  <span className="text-xs">{original_title || title}</span>
                </Link>
              );
            }
          )}
        </div>
      ) : (
        <div className="space-y-5">
          {trendingData && (
            <section>
              <span className="text-md font-bold text-gray-medium">
                Explore Movies and Shows
              </span>
              <div className="grid grid-flow-col grid-rows-1 overflow-auto scrollbar-hide gap-5">
                {trendingData?.map(
                  ({ backdrop_path, title, id }: MovieI, index: number) => {
                    if (!backdrop_path) return;
                    return (
                      <Link to={`/movie/${id}`} key={`image-${index}`}>
                        <div className="w-[70vw] flex flex-col px-2 py-5">
                          <img
                            className="rounded-lg w-full h-full shadow-2xl"
                            src={`${
                              import.meta.env.VITE_BASE_IMG_URL
                            }${backdrop_path}`}
                          />
                          <span className="text-xs pt-2">{title}</span>
                        </div>
                      </Link>
                    );
                  }
                )}
              </div>
            </section>
          )}
          {popularData && (
            <section className="space-y-3">
              <span className="text-md font-bold text-gray-medium">
                Popular Searches
              </span>
              <div className="grid grid-cols-2 gap-5">
                {popularData?.results?.map(
                  ({ poster_path, id }: MovieI, index: number) => {
                    return (
                      <Link to={`/movie/${id}`} key={`popular-${index}`}>
                        <img
                          className="rounded-xl shadow-2xl h-[30vh] w-auto"
                          src={`${
                            import.meta.env.VITE_BASE_IMG_URL
                          }${poster_path}`}
                        />
                      </Link>
                    );
                  }
                )}
              </div>
            </section>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
