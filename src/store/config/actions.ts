import { createAsyncThunk } from '@reduxjs/toolkit';

import { getConfig } from 'api/config/getConfig';

const ACTION_TYPE = 'config/load';

export const fetchConfig = createAsyncThunk(ACTION_TYPE, async () => {
  const {
    images: { base_url: baseUrl }
  } = await getConfig();

  return baseUrl;
});
