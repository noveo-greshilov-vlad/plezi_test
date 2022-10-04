import { useEffect } from 'react';

import { fetchMovieDetails } from 'store/movie/actions/fetchMovieDetails';
import { selectCurrentMovie, selectIsLoading } from 'store/movie/selectors';
import { TMovieDetailsResponse } from 'types';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useMovie = (id: number): [TMovieDetailsResponse, boolean] => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector(state =>
    selectCurrentMovie(state, id.toString())
  );
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (!movie && !isNaN(id)) {
      dispatch(fetchMovieDetails(Number(id)));
    }
  }, [dispatch, id, movie]);

  return [movie, isLoading];
};
