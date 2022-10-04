import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovieDetails } from 'api';

export const fetchMovieDetails = createAsyncThunk(
  'movie/details/load',
  async (id: number) => {
    const data = await getMovieDetails(id);

    return data;
  }
);
