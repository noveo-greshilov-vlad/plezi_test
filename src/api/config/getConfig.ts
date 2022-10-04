import { api } from 'api/client';
import { TApiConfigType } from 'types';

export async function getConfig() {
  const { data } = await api.get<TApiConfigType>(`/configuration`);

  return data;
}
