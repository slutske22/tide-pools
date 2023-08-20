import { RootState, useGetCruisesQuery } from '@/store';
import React from 'react';
import { Card, Typography, Input, Spinner } from '@material-tailwind/react';
import { Cruise } from '@/models';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from '@/store/SortFilterSlice';

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
  {
    name: 'Total Area',
    value: 'total_area',
  },
];

/**
 * The main table showing cruises
 */
export const CruiseTable: React.FC = () => {
  const { data, error, isLoading } = useGetCruisesQuery('');

  const dispatch = useDispatch();

  const search = useSelector((state: RootState) => state.filters.search);
  const sortOrder = useSelector((state: RootState) => state.filters.sortOrder);
  const sortColumn = useSelector((state: RootState) => state.filters.sortColumn);

  const list = [...(data ?? [])]
    .filter(
      (cruise) =>
        cruise.entry_id?.toLowerCase().includes(search.toLowerCase().trim()) ||
        cruise.device_make?.toLowerCase().includes(search.toLowerCase().trim()),
    )
    .sort((a, b) => {
      if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortColumn] <= b[sortColumn]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const totalArea = list.reduce((acc, cur) => {
    if (Number(cur.total_area)) {
      return acc + Number(cur.total_area);
    }
    return acc;
  }, 0);

  return (
    <main style={{ maxHeight: '100vh' }}>
      <Typography variant='h1'>GMRT Cruises</Typography>
      <div className='flex justify-between w-full items-center py-3 px-3'>
        <div className='flex  items-center py-3'>
          <Typography variant='h5' className='mr-2'>
            Search by Ship Name or Cruise Entry ID:{' '}
          </Typography>
          <Input
            containerProps={{
              style: { width: '400px' },
            }}
            value={search}
            onChange={(e) => {
              dispatch(filterSlice.actions.setSearch(e.target.value));
            }}
          />
        </div>
        <Typography variant='h5'>Total Area: {totalArea.toLocaleString()}</Typography>
      </div>

      <Card className='h-full w-full table-wrp block'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead className='sticky top-0'>
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    key={`head-cell-${column.value}`}
                    className={'border-b border-blue-gray-100 bg-blue-gray-50 p-4 cursor-pointer'}
                    onClick={() => {
                      if (sortColumn === column.value) {
                        dispatch(
                          filterSlice.actions.setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'),
                        );
                      } else {
                        dispatch(filterSlice.actions.setSortColumn(column.value));
                        dispatch(filterSlice.actions.setSortOrder('asc'));
                      }
                    }}
                  >
                    <Typography
                      color='blue-gray'
                      className='font-normal leading-none opacity-70 flex'
                    >
                      {column.name}
                      <ChevronDownIcon
                        strokeWidth={2}
                        className='h-4 w-4 ml-3'
                        style={{
                          opacity: sortColumn === column.value ? 1 : 0,
                          rotate: sortOrder === 'asc' ? '180deg' : undefined,
                        }}
                      />
                    </Typography>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={columns.length}>
                  <Spinner className='h-12 w-12' style={{ margin: 'auto' }} />
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={columns.length}>Oopens! Something went wrong...</td>
              </tr>
            )}
            {list
              ? list.map((cruise, i) => (
                  <tr key={`cruise-row-${cruise.survey_id}-${i}`}>
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
