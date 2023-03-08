import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import {
//   getNowPlayingMovies,
//   getPopularMovies,
//   getUpcomingMovies,
// } from "../../api/movies";
import MovieList from "../home/movie-list";

const CategorySearch = ({ selected }: { selected: number }) => {
  const [querySelected, setQuerySelected] = useState({
    id: -1,
    data: [],
  });

  // const { data: upcomingMoviesData, isLoading: upcomingLoading } = useQuery(
  //   "getUpcomingMovies",
  //   () =>
  //     getUpcomingMovies(`{
  //     upcomingMovies {
  //         id,
  //         poster_path,
  //         backdrop_path,
  //         title,
  //         overview,
  //         release_date,
  //         vote_average,
  //       }
  //     }`),
  //   {
  //     enabled: true,
  //   }
  // );

  // const { data: popularMoviesData, isLoading } = useQuery(
  //   "getPopularMovies",
  //   () =>
  //     getPopularMovies(`{
  //     popularMovies {
  //         id,
  //         poster_path,
  //         backdrop_path,
  //         title,
  //         overview,
  //         release_date,
  //         vote_average,
  //       }
  //     }`),
  //   {
  //     enabled: true,
  //   }
  // );
  // const { data: nowPlayingMoviesData, isLoading: nowPlayingLoading } = useQuery(
  //   "getNowPlayingMovies",
  //   () =>
  //     getNowPlayingMovies(`{
  //       nowPlayingMovies {
  //         id,
  //         poster_path,
  //         backdrop_path,
  //         title,
  //         overview,
  //         release_date,
  //         vote_average,
  //       }
  //     }`),
  //   {
  //     enabled: true,
  //   }
  // );

  // useEffect(() => {
  //   let correspondingData;
  //   switch (querySelected.id) {
  //     case 0:
  //       correspondingData = upcomingMoviesData?.upcomingMovies;
  //     case 1:
  //       correspondingData = popularMoviesData?.popularMovies;
  //     case 2:
  //       correspondingData = nowPlayingMoviesData?.nowPlayingMovies;
  //     default:
  //       break;
  //   }
  //   setQuerySelected({ ...querySelected, data: correspondingData });
  // }, [querySelected.id]);
  return (
    <div className="text-black px-4">
      <select
        name={"category-filter"}
        placeholder="Select a Category"
        className="rounded-lg relative h-10 px-3 w-full py-2 text-center"
        onChange={(e) => {
          setQuerySelected({ ...querySelected, id: parseInt(e.target.value) });
        }}
      >
        <option value={-1}>--Please choose a category--</option>
        <option value={1}>Upcoming Movies</option>
        <option value={2}>Popular Movies</option>
        <option value={3}>Now Playing Movies</option>
      </select>
      {/* {querySelected.id !== -1 || (
        <MovieList data={querySelected.data} isLoading={isLoading} />
      )} */}
    </div>
  );
};

export default CategorySearch;
