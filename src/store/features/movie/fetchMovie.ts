import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies } from 'Api';

export const fetchMovies = createAsyncThunk('movie/load', async () => {
  const { results } = await getPopularMovies();

  return results;
});
