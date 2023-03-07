import MovieDetails from "../pages/movie-details";
import Home from "../pages/home";
import { RouteI } from "./interfaces";
import Favorites from "../pages/favorites";

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
    name: "favorites",
    path: "/favorites",
    compontent: <Favorites />,
    menu: true,
  },
];
