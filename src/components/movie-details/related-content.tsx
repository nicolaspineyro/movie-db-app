import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import {
  getMovieDiscover,
  getRecommendations,
  getSimilarMovies,
} from "../../api/movies";
import { MovieI } from "../../utils/interfaces";

const RelatedContent = ({
  image,
  genre,
  id,
}: {
  image: { file_path: string };
  genre: { id: number; name: string };
  id: string;
}) => {
  const { data: discover } = useQuery(
    "getMovieDiscover",
    () => getMovieDiscover({ with_genres: genre.id }),
    {
      enabled: !!id || !!genre.id,
    }
  );

  if (
    !discover?.results.filter(({ backdrop_path }: MovieI) => !!backdrop_path)
      .length
  )
    return <></>;

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${import.meta.env.VITE_BASE_IMG_URL}/${
            image.file_path
          })`,
        }}
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex  flex-col justify-end"
      >
        <div className="space-y-2 bg-gradient-to-t from-[#7F7F7F] via-[#7F7F7F] to-transparent">
          <span className="text-3xl font-semibold px-4">{genre.name}</span>
          <p className="text-sm w-3/4 text-justify px-4">
            Explore similar movies. Click on any movie poster to learn more
            about the cast, crew, and reviews.
          </p>
          <div className="grid grid-flow-col grid-rows-1 overflow-auto scrollbar-hide gap-5">
            {discover?.results?.map(
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
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
