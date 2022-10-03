import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConfig } from 'Api';

export const fetchConfig = createAsyncThunk('config/load', async () => {
  const {
    images: { base_url: baseUrl }
  } = await getConfig();

  return baseUrl;
});
