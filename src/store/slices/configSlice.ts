import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchConfig } from 'store/features/config/fetchConfig';

type TConfigSliceState = {
  baseUrl: string;
  isLoading: boolean;
};

const initialState = {
  baseUrl: '',
  isLoading: false
};

const setBaseUrlReducer = (
  state: TConfigSliceState,
  action: PayloadAction<string>
) => {
  state.baseUrl = action.payload;
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setBaseUrl: setBaseUrlReducer
  },
  extraReducers: builder => {
    builder.addCase(fetchConfig.pending, (state: TConfigSliceState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchConfig.fulfilled,
      (state: TConfigSliceState, action) => {
        if (action.payload) {
          setBaseUrlReducer(state, action);
        }
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {
        state.isLoading = false;
      }
    );
  }
});

export const { setBaseUrl } = configSlice.actions;

export const configReducer = configSlice.reducer;
