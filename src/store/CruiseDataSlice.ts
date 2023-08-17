import { Cruise } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

/**
 * RTK query tools for fetching cruise ship data
 */
export const cruiseApi = createApi({
  reducerPath: 'cruiseData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.gmrt.org/services/GmrtCruises.php',
  }),
  endpoints: (builder) => ({
    getCruises: builder.query<Cruise, string>({
      query: () => '/',
    }),
  }),
});

export const { useGetCruisesQuery } = cruiseApi;
