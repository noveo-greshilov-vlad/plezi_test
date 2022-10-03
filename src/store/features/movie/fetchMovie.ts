import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies } from '../../../api';

const fetchMovies = createAsyncThunk('movie/load', async () => {
  const { results } = await getPopularMovies();

  return results;
});

export default fetchMovies;
