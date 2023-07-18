import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addABook: (state, action) => {
      state.books = state.books.concat(action.payload);
    },
    removeABook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addABook, removeABook } = booksSlice.actions;
export default booksSlice.reducer;
