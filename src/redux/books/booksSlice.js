import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addsABook(state, action) {
      const newState = state.push(action.payload);
      return newState;
    },
    removesABook(state, action) {
      const newState = state.filter(!action.payload);
      return newState;
    },
  },
});

export const { addsABook, removesABook } = booksSlice.actions;
export default booksSlice.reducer;
