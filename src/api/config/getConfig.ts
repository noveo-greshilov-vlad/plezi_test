import { api } from 'api/client';
import { TApiConfigType } from 'types';

const GET_CONFIG = `/configuration`;

export async function getConfig() {
  const { data } = await api.get<TApiConfigType>(GET_CONFIG);

  return data;
}
