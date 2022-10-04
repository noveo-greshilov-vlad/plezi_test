import { useEffect } from 'react';

import { fetchMovies } from 'store/movie/actions/fetchMovie';
import { selectIsLoading, selectMoviesList } from 'store/movie/selectors';
import { TMovieListResultObject } from 'types';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useMovies = (): [Array<TMovieListResultObject>, boolean] => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMoviesList);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (movies.length !== 0 || isLoading) return;

    dispatch(fetchMovies());
  }, [dispatch, movies.length]);

  return [movies, isLoading];
};
