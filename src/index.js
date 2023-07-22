import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import store from './redux/store';
import { fetchBooks } from './redux/books/booksSlice';

store.dispatch(fetchBooks());

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
