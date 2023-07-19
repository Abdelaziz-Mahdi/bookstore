import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function BookList() {
  const booksList = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {booksList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}
