import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/djNbYzjN5WcxJUvhl1I3/books';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book) => {
    try {
      const response = await axios.post(API_URL, book);
      return ([response.data, book]);
    } catch (error) {
      return error;
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return ([response.data, id]);
    } catch (error) {
      return error;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addABook: (state, action) => {
      state.books.push(action.payload);
    },
    removeABook: (state, action) => state.books.filter((book) => book.id !== action.payload),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.booksLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.booksLoading = 'failed';
        state.booksError = action.payload;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload[1];
        state.books = Object.fromEntries(Object.entries(state.books)
          .filter(([key]) => !key.includes(bookId)));
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const bookData = action.payload[1];
        state.books = { ...state.books, [bookData.item_id]: [bookData] };
      });
  },
});

export const selectBooks = (state) => state.books.books;
export const selectBooksLoading = (state) => state.books.booksLoading;
export const selectBooksError = (state) => state.books.booksError;
export const { addABook, removeABook } = booksSlice.actions;
export default booksSlice.reducer;
