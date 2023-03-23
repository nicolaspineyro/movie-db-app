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
  genre_ids?: number[];
  production_companies: { id: number; name: string; logo_path?: string }[];
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
}

interface GenresI {
  id: number;
  name: string;
}

export type { RouteI, MovieI, GenresI };
