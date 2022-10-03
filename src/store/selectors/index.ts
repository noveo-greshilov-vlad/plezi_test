import { TRootState } from '..';

export const selectIsLoading = (state: TRootState) => state.movie.isLoading;

export const selectCurrentMovie = (state: TRootState, id: string) => state.movie.current[id];

export const selectMoviesList = (state: TRootState) => state.movie.list;
