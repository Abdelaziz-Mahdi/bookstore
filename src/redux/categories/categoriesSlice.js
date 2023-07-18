import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories: (state, action) => { state.categories = action.payload ? 'Under construction' : state.categories; },
  },
});

export const { checkCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
