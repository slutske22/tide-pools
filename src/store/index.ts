import { configureStore } from '@reduxjs/toolkit';
import { SortFilterState, filterSlice } from './SortFilterSlice';
import { cruiseApi } from './CruiseDataSlice';

export * from './CruiseDataSlice';

export type RootState = {
  /**
   * State of the cruise ship data query
   */
  cruiseData: ReturnType<typeof cruiseApi.reducer>;
  /**
   * State of sort and filter that user is using
   */
  filters: SortFilterState;
};

export const store = configureStore<RootState>({
  reducer: {
    [cruiseApi.reducerPath]: cruiseApi.reducer,
    filters: filterSlice.reducer,
  },
  // @ts-expect-error Need to figure out proper ts config for middleware, not causing runtime errors
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cruiseApi.middleware),
});
