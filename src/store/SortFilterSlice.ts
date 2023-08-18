import { createSlice, Slice } from '@reduxjs/toolkit';
import { Cruise } from '../models';

export type SortFilterState = {
  sortColumn: keyof Cruise;
  sortOrder: 'asc' | 'desc';
  search: string;
};

const initialState: SortFilterState = {
  sortColumn: 'year',
  /**
   * The sort order the user wants to apply
   */
  sortOrder: 'asc',
  /**
   * Current filters user is applying, if any
   */
  search: '',
};

export const filterSlice: Slice<SortFilterState> = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortColumn: (state, action) => {
      state.sortColumn = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});
