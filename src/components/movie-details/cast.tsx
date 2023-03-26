import { useEffect } from "react";
import { useQuery } from "react-query";
import { getCredits } from "../../api/movies";
import { getInitials } from "../../utils/helpers";

const Cast = ({ id }: { id?: string }) => {
  const { data, isLoading, refetch } = useQuery(
    "getCredits",
    () => getCredits(id),
    {
      enabled: !!id,
    }
  );
  const cast = data?.cast;

  useEffect(() => {
    refetch();
  }, [id]);

  if (!cast) return <></>;

  return (
    <section className="space-x-2 space-y-6 py-5 bg-gray-medium">
      <span className="text-2xl font-semibold px-4">Cast & Crew</span>
      <div className={"flex overflow-scroll gap-7 items-center scrollbar-hide"}>
        {cast
          ?.slice(0, 10)
          .map(
            (
              {
                name,
                profile_path,
                character,
              }: { name: string; profile_path: string; character: string },
              index: number
            ) => (
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
                <div className="text-center w-32 h-full">
                  <p className="text-md">{name}</p>
                  <p className="text-sm text-black line-clamp-2">
                    {character}
                  </p>
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default Cast;
