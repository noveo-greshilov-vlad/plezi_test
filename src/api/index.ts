import axios from 'axios';

enum MovieStatus {
  rumored = 'Rumored',
  planned = 'Planned',
  production = 'In Production',
  postproduction = 'Post Production',
  released = 'Released',
  canceled = 'Canceled'
}

type MovieDetailsResponse = {
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
  status: MovieStatus;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieListResultObject = {
  poster_path?: string;
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

type PopularMoviesResponse = {
  page: number;
  results: Array<MovieListResultObject>;
  total_pages: number;
  total_results: number;
};

const baseURL = process.env.REACT_APP_API_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const api = axios.create({
  baseURL,
  timeout: 1000,
  params: {
    api_key: apiKey
  }
});
api.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);

      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
);

export async function getPopularMovies() {
  const { data } = await api.get<PopularMoviesResponse>('/movie/popular');

  return data;
}

export async function getMovieDetails(id: number) {
  const { data } = await api.get<MovieDetailsResponse>(`/movie/${id}`);

  return data;
}
