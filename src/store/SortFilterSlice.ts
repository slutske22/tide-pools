import { createSlice, Slice } from '@reduxjs/toolkit';

export type SortFilterState = {
  sortOrder: 'asc' | 'desc';
  filter: {
    field: string;
    values: string[];
  };
};

const initialState: SortFilterState = {
  /**
   * The sort order the user wants to apply
   */
  sortOrder: 'asc',
  /**
   * Current filters user is applying, if any
   */
  filter: {
    /**
     * What field is being filtered on
     */
    field: '',
    /**
     * What values to use in the filter
     */
    values: [],
  },
};

export const filterSlice: Slice<SortFilterState> = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
});
