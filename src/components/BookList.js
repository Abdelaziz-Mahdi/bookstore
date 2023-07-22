import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { selectBooks, fetchBooks } from '../redux/books/booksSlice';

export default function BookList() {
  const booksList = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bookData = Object.entries(booksList).map((book) => {
    const [id, data] = book;
    return [id, ...data];
  });

  return (
    <div>
      <ul>
        {bookData.map((book) => (
          <Book
            key={book[0]}
            id={book[0]}
            category={book[1].category}
            title={book[1].title}
            author={book[1].author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}
