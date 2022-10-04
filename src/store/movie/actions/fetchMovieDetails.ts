import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovieDetails } from 'api/movie/getMovieDetails';

const ACTION_TYPE = 'movie/details/load';

export const fetchMovieDetails = createAsyncThunk(
  ACTION_TYPE,
  async (id: number) => {
    const data = await getMovieDetails(id);

    return data;
  }
);
