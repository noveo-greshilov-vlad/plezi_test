import { TRootState } from 'store';

export const selectBaseUrl = (state: TRootState) => state.config.baseUrl;
