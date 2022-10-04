import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPopularMovies } from 'api/movie/getPopularMovies';

export const fetchMovies = createAsyncThunk('movie/load', async () => {
  const { results } = await getPopularMovies();

  return results;
});
