import { TRootState } from 'store';

export const selectIsLoading = (state: TRootState) => state.movie.isLoading;

export const selectCurrentMovie = (state: TRootState, id: string) =>
  state.movie.current[id] ?? null;

export const selectMoviesList = (state: TRootState) => state.movie.list;
