import { useCallback } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TRootState, AppDispatch } from 'Store';
import { selectBaseUrl } from 'Store/selectors';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const useUrlBuilders = () => {
  const baseUrl = useAppSelector(selectBaseUrl);

  const buildPreviewUrl = useCallback(
    (file: string) => `${baseUrl}w500${file}`,
    [baseUrl]
  );
  const buildPoserUrl = useCallback(
    (file: string) => `${baseUrl}original${file}`,
    [baseUrl]
  );

  return { buildPreviewUrl, buildPoserUrl };
};
