import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddBook from './AddBook';

export default function BookList() {
  const [books, setBooks] = useState([
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

  const toAddBook = (book) => {
    setBooks([...books, book]);
  };

  const updateBooks = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
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
            updateBooks={updateBooks}
          />
        ))}
      </ul>
      <AddBook toAddBook={toAddBook} />
    </div>
  );
}
