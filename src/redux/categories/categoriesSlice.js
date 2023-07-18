import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories(state) {
      let newState = '';
      if (state === []) {
        newState = 'Under construction';
      } else {
        newState = state;
      }
      return newState;
    },
  },
});

export const { checkCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
