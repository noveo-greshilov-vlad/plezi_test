import { api } from 'api/client';
import { TMovieDetailsResponse } from 'types';

export async function getMovieDetails(id: number) {
  const { data } = await api.get<TMovieDetailsResponse>(`/movie/${id}`);

  return data;
}
