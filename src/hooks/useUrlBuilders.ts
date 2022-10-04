import { useCallback } from 'react';

import { selectBaseUrl } from 'store/config/selectors';

import { useAppSelector } from './useAppSelector';

export const useUrlBuilders = () => {
  const baseUrl = useAppSelector(selectBaseUrl);

  const buildPreviewUrl = useCallback(
    (file: string) => (!baseUrl ? '' : `${baseUrl}w500${file}`),
    [baseUrl]
  );
  const buildPosterUrl = useCallback(
    (file: string) => (!baseUrl ? '' : `${baseUrl}original${file}`),
    [baseUrl]
  );

  return { buildPreviewUrl, buildPosterUrl };
};
