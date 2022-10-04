import { api } from 'api/client';
import { TPopularMoviesResponse } from 'types';

export async function getPopularMovies() {
  const { data } = await api.get<TPopularMoviesResponse>('/movie/popular');

  return data;
}
