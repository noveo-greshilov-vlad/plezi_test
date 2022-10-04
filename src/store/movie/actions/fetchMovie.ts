import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPopularMovies } from 'api/movie/getPopularMovies';

const ACTION_TYPE = 'movie/load';

export const fetchMovies = createAsyncThunk(ACTION_TYPE, async () => {
  const { results } = await getPopularMovies();

  return results;
});
