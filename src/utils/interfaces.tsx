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
  genres: GenresI[];
  production_companies: { id: number; name: string; logo_path?: string }[];
  poster_path: string;
  backdrop_path: string;
  title: string;
  spoken_languages: { name: string; english_name: string; iso_639_1: string }[];
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  original_language: string;
  budget: number;
  revenue: number;
  original_title: string;
  homepage: string;
  production_countries: { iso_3166_1: string; name: string }[];
}
interface PersonI {
  id: number;
  name: string;
  profile_path: string;
}

interface GenresI {
  id: number;
  name: string;
}

export type { RouteI, MovieI, GenresI, PersonI };
