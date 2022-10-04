import { useEffect } from 'react';

import { fetchConfig } from 'store/config/actions';

import { useAppDispatch } from './useAppDispatch';

export const useConfigFetcher = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchConfig());
  }, []);
};
