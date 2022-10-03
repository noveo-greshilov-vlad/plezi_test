import axios from 'axios';
import {
  TApiConfigType,
  TMovieDetailsResponse,
  TPopularMoviesResponse
} from 'Shared';

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
  const { data } = await api.get<TPopularMoviesResponse>('/movie/popular');

  return data;
}

export async function getMovieDetails(id: number) {
  const { data } = await api.get<TMovieDetailsResponse>(`/movie/${id}`);

  return data;
}

export async function getConfig() {
  const { data } = await api.get<TApiConfigType>(`/configuration`);

  return data;
}
