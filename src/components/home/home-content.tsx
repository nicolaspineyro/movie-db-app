import { useQuery } from "react-query";
import { getPopular } from "../../api/movies";
import { GenresI } from "../../utils/interfaces";
import CardsLayout from "../cards-layout";

const HomeContent = ({ genres }: { genres: GenresI[] }) => {
  const { data: popularMoviesData, isLoading } = useQuery(["getPopular"], () =>
    getPopular()
  );

  if (!popularMoviesData) {
    return <></>;
  }

  return (
    <section className="text-gray-dark py-5 px-4 space-y-5">
      <div className="">
        <span className="text-2xl font-bold">Now Playing Movies</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
      <div className="">
        <span className="text-2xl font-bold">Browse by Genre</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
      <div className="">
        <span className="text-2xl font-bold">Popular Movies</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
      <div className="">
        <span className="text-2xl font-bold">Browse by Actor</span>
        <CardsLayout data={popularMoviesData.results} genres={genres} />
      </div>
    </section>
  );
};

export default HomeContent;
