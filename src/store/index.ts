import { configureStore } from '@reduxjs/toolkit';
import { movieReducer, configReducer } from './slices';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    config: configReducer
  }
});

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
