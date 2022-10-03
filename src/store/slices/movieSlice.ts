import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetailsResponse, MovieListResultObject } from '../../shared';
import fetchMovies from '../features/movie/fetchMovie';
import fetchMovieDetails from '../features/movie/fetchMovieDetails';

type CurrentMoviesMap = {
  [id: string]: MovieDetailsResponse;
};

type MovieSliceState = {
  list: Array<MovieListResultObject>;
  isLoading: boolean;
  current: CurrentMoviesMap;
};

const initialState = {
  list: new Array<MovieListResultObject>(),
  isLoading: false,
  current: {} as CurrentMoviesMap
};

const setCurrentMovieReducer = (state: MovieSliceState, action: PayloadAction<MovieDetailsResponse>) => {
  state.current[action.payload.id] = action.payload;
};

const setMovieListReducer = (state: MovieSliceState, action: PayloadAction<Array<MovieListResultObject>>) => {
  state.list = action.payload;
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setCurrentMovie: setCurrentMovieReducer,
    setMovieList: setMovieListReducer
  },
  extraReducers: bulder => {
    bulder.addCase(fetchMovies.fulfilled, (state: MovieSliceState, action) => {
      if (action.payload) {
        setMovieListReducer(state, action);
      }
      state.isLoading = false;
    });
    bulder.addCase(fetchMovieDetails.fulfilled, (state: MovieSliceState, action) => {
      const id = action.payload.id;
      if (action.payload) {
        setCurrentMovieReducer(state, action);
        // state.current[id.toString()] = payload;
      }
      state.isLoading = false;
    });
    bulder.addCase(fetchMovies.pending, (state: MovieSliceState, { payload }) => {
      state.isLoading = true;
    });
  }
});

export const { setMovieList, setCurrentMovie } = movieSlice.actions;

export default movieSlice.reducer;
