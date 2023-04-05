import { format, differenceInYears } from "date-fns";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { getMovieDiscover, getPerson } from "../api/movies";
import LoadingSpinner from "../components/ui/loading-spinner";
import { MovieI } from "../utils/interfaces";

const PersonDetails = () => {
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useQuery(
    "getPersonDetails",
    () => getPerson(id),
    {
      enabled: !!id,
      refetchOnMount: true,
    }
  );

  const { data: personContentData, isLoading: personContentLoading } = useQuery(
    "getPersonContent",
    () => getMovieDiscover({ with_people: id }),
    {
      enabled: !!id,
    }
  );

  if (!data || !personContentData) {
    return <LoadingSpinner />;
  }
  const {
    name,
    profile_path,
    biography,
    also_known_as,
    place_of_birth,
    birthday,
  } = data;

  return (
    <section className="text-center">
      <img
        className="h-[65vh] w-screen object-cover object-top"
        src={`${import.meta.env.VITE_BASE_IMG_URL}${profile_path}`}
      />
      <h1 className="text-3xl font-bold text-gray-dark pt-5">{name}</h1>
      <div className="flex flex-wrap justify-center space-x-3 pt-2 items-center text-gray-medium text-xs">
        <span>{format(new Date(birthday), "MMM d, yyyy")}</span>
        <span>{place_of_birth}</span>
        <span>{differenceInYears(new Date(), new Date(birthday))} Years</span>
      </div>

      <div className="flex flex-col items-center space-y-4 p-5">
        <button className="bg-gray-dark space-x-3 flex items-center justify-center text-white-default py-3 w-60 text-lg font-medium rounded-lg">
          <BsPlus />
          <span>Add to Favorites</span>
        </button>
        <p
          className={`text-justify ${
            showMore ? "line-clamp-none" : "line-clamp-3"
          } transition-all duration-1000 text-gray-dark text-md`}
        >
          {biography}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-xs self-end text-gray-medium"
        >
          {`Show ${showMore ? "Less" : "More"}`}
        </button>
      </div>
      <div>
        <span className="text-xl font-semibold">{`Discover more with ${name}`}</span>
        <div className="flex overflow-auto scrollbar-hidden">
          {personContentData?.results?.map(
            ({ backdrop_path, title, id }: MovieI, index: number) => {
              if (!backdrop_path) return;

              return (
                <Link to={`/movie/${id}`} key={`image-${index}`}>
                  <div className="w-[75vw] flex flex-col px-2 py-5">
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
    </section>
  );
};

export default PersonDetails;
