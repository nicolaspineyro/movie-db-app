import MovieDetails from "../pages/movie-details";
import Home from "../pages/home";
import { RouteI } from "./interfaces";
import Favorites from "../pages/favorites";
import SearchPage from "../pages/search";

export const AppRoutes: RouteI[] = [
  {
    id: 0,
    name: "home",
    path: "/",
    compontent: <Home />,
    menu: true,
  },
  {
    id: 1,
    name: "details",
    path: "/movie/:id",
    compontent: <MovieDetails />,
  },
  {
    id: 2,
    name: "search",
    path: "/search",
    compontent: <SearchPage />,
    menu: true,
  },
  {
    id: 3,
    name: "favorites",
    path: "/favorites",
    compontent: <Favorites />,
    menu: true,
  },
];
