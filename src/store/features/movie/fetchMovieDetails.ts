import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetails } from '../../../api';

const fetchMovieDetails = createAsyncThunk('movie/load/details', async (id: number) => {
  const data = await getMovieDetails(id);

  return data;
});

export default fetchMovieDetails;
