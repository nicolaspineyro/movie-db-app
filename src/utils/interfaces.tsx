import { ReactElement } from "react";

interface RouteI {
  id: number;
  name: string;
  path: string;
  compontent: ReactElement;
  menu?: boolean;
}

export interface StateI {
  favorites: {
    favoritesArray: MovieI[];
  };
}

interface MovieI {
  id: number;
  imdb_id: string;
  genres?: { id: number; name: string }[];
  production_companies: { id: number; name: string; logo_path?: string }[];
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
}

export type { RouteI, MovieI };
