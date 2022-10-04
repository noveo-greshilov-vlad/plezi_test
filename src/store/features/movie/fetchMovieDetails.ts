import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovieDetails } from 'api/movie/getMovieDetails';

export const fetchMovieDetails = createAsyncThunk(
  'movie/details/load',
  async (id: number) => {
    const data = await getMovieDetails(id);

    return data;
  }
);
