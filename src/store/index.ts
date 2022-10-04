import { configureStore } from '@reduxjs/toolkit';

import { configReducer } from './config/reducer';
import { movieReducer } from './movie/reducer';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    config: configReducer
  }
});

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
