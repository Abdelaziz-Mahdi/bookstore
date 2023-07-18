import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddBook from './AddBook';

export default function BookList() {
  const [books, setBooks] = useState([]);

  // if there is no books in local storage, set the default books
  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem('books'));
    if (getBooks.length !== 0) {
      setBooks(getBooks);
    } else {
      setBooks([
        {
          id: uuidv4(),
          title: 'The Hunger Games',
          category: 'Action',
          author: 'Suzanne Collins',
          progress: '64%',
          chapter: 'Chapter 17',

        },
        {
          id: uuidv4(),
          title: 'Dune',
          category: 'Sci-Fi',
          author: 'Frank Herbert',
          progress: '8%',
          chapter: 'Chapter 3: "A Lesson Learned"',

        },
        {
          id: uuidv4(),
          title: 'The Lord of the Rings',
          category: 'History',
          author: 'J.R.R. Tolkien',
          progress: '0%',
          chapter: 'Introduction',

        },
      ]);
    }
  }, []);

  // update the local storage when the books state changes after adding a book
  const toAddBook = (book) => {
    const add = [...books, book];
    localStorage.setItem('books', JSON.stringify(add));
    const getBooks = JSON.parse(localStorage.getItem('books'));
    setBooks(getBooks);
  };

  // update the local storage when the books state changes after deleting a book
  const toDeleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(newBooks));
    const getBooks = JSON.parse(localStorage.getItem('books'));
    setBooks(getBooks);
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
            progress={book.progress}
            chapter={book.chapter}
            updateBooks={toDeleteBook}
          />
        ))}
      </ul>
      <AddBook toAddBook={toAddBook} />
    </div>
  );
}
