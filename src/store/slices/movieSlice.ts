import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMovieDetailsResponse, TMovieListResultObject } from 'Shared';
import { fetchMovies } from 'Store/features/movie/fetchMovie';
import { fetchMovieDetails } from 'Store/features/movie/fetchMovieDetails';

type TCurrentMoviesMap = {
  [id: string]: TMovieDetailsResponse;
};

type TMovieSliceState = {
  list: Array<TMovieListResultObject>;
  isLoading: boolean;
  current: TCurrentMoviesMap;
};

const initialState = {
  list: new Array<TMovieListResultObject>(),
  isLoading: false,
  current: {} as TCurrentMoviesMap
};

const setCurrentMovieReducer = (
  state: TMovieSliceState,
  action: PayloadAction<TMovieDetailsResponse>
) => {
  state.current[action.payload.id] = action.payload;
};

const setMovieListReducer = (
  state: TMovieSliceState,
  action: PayloadAction<Array<TMovieListResultObject>>
) => {
  state.list = action.payload;
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setCurrentMovie: setCurrentMovieReducer,
    setMovieList: setMovieListReducer
  },
  extraReducers: builder => {
    builder.addCase(
      fetchMovies.fulfilled,
      (state: TMovieSliceState, action) => {
        if (action.payload) {
          setMovieListReducer(state, action);
        }
        state.isLoading = false;
      }
    );
    builder.addCase(
      fetchMovieDetails.fulfilled,
      (state: TMovieSliceState, action) => {
        if (action.payload) {
          setCurrentMovieReducer(state, action);
        }
        state.isLoading = false;
      }
    );
    builder.addCase(
      fetchMovies.pending,
      (state: TMovieSliceState, { payload }) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {
        state.isLoading = false;
      }
    );
  }
});

export const { setMovieList, setCurrentMovie } = movieSlice.actions;

export default movieSlice.reducer;
