import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import {
  selectBooks, selectBooksError, selectBooksLoading,
} from '../redux/books/booksSlice';

export default function BookList() {
  const booksList = useSelector(selectBooks);
  const status = useSelector(selectBooksLoading);
  const error = useSelector(selectBooksError);

  let content;

  if (status === true) {
    content = (
      <li>
        <h2>Loading...</h2>
      </li>
    );
  } else if (status === false) {
    const bookData = Object.entries(booksList).map((book) => {
      const [id, data] = book;
      return [id, ...data];
    });
    content = bookData.map((book) => (
      <Book
        key={book[0]}
        id={book[0]}
        category={book[1].category}
        title={book[1].title}
        author={book[1].author}
      />
    ));
  } else if (status === 'failed') {
    content = (
      <li>
        <h2>Posts not found</h2>
        <p>{error}</p>
      </li>
    );
  }

  return (
    <div>
      <ul>
        {content}
      </ul>
      <AddBook />
    </div>
  );
}
