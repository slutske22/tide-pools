import { useGetCruisesQuery } from '@/store';
import React from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Cruise } from '@/models';
import { clsx } from 'clsx';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const columns: { name: string; value: keyof Cruise }[] = [
  {
    name: 'Entry ID',
    value: 'entry_id',
  },
  {
    name: 'Platform ID',
    value: 'platform_id',
  },
  {
    name: 'Year',
    value: 'year',
  },
  {
    name: 'Chief',
    value: 'chief',
  },
  {
    name: 'Device Make',
    value: 'device_make',
  },
  {
    name: 'Device Model',
    value: 'device_model',
  },
];

/**
 * The main table showing cruises
 */
export const CruiseTable: React.FC = () => {
  const { data, error, isLoading } = useGetCruisesQuery('');

  console.log(data);

  return (
    <main>
      <Typography variant='h1'>GMT Cruises</Typography>
      <Card className='h-full w-full overflow-scroll'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {columns.map((column) => {
                const sortable = column.value === 'year';

                return (
                  <th
                    key={`head-cell-${column.value}`}
                    className={clsx('border-b border-blue-gray-100 bg-blue-gray-50 p-4', {
                      ['cursor-pointer']: sortable,
                    })}
                    onClick={() => {
                      if (sortable) {
                        // TODO
                      }
                    }}
                  >
                    <Typography
                      color='blue-gray'
                      className='font-normal leading-none opacity-70 flex'
                    >
                      {column.name}
                      {sortable && <ChevronDownIcon strokeWidth={2} className='h-4 w-4 ml-3' />}
                    </Typography>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((cruise) => (
                  <tr key={`cruise-row-${cruise.entry_id}`}>
                    {columns.map((column) => (
                      <td
                        key={`cell-${cruise.entry_id}-${column.value}`}
                        className='p-4 border-b border-blue-gray-50'
                      >
                        {cruise[column.value]}
                      </td>
                    ))}
                  </tr>
                ))
              : undefined}
          </tbody>
        </table>
      </Card>
    </main>
  );
};
