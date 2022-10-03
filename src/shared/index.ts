export enum EMovieStatus {
  rumored = 'Rumored',
  planned = 'Planned',
  production = 'In Production',
  postproduction = 'Post Production',
  released = 'Released',
  canceled = 'Canceled'
}

export type TMovieDetailsResponse = {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: Array<{
    name: string;
    id: number;
    logo_path?: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    iso_639_1: string;
    name: string;
  }>;
  status: EMovieStatus;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieListResultObject = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type TPopularMoviesResponse = {
  page: number;
  results: Array<TMovieListResultObject>;
  total_pages: number;
  total_results: number;
};

export type TApiConfigType = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: Array<string>;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    still_sizes: Array<string>;
  };
  change_keys: Array<string>;
};
