import { useGetCruisesQuery } from '@/store';
import React from 'react';

/**
 * The main table showing cruises
 */
export const CruiseTable: React.FC = () => {
  const { data, error, isLoading } = useGetCruisesQuery('');

  console.log(data);

  return (
    <main>
      <h1>GMT Cruises</h1>
    </main>
  );
};
