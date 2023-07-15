import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

export default function BookList() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',

    },
    {
      id: 2,
      title: 'Dune',
      category: 'Sci-Fi',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',

    },
    {
      id: 3,
      title: 'The Lord of the Rings',
      category: 'History',
      author: 'J.R.R. Tolkien',
      progress: '0%',
      chapter: 'Introduction',

    },
  ]);
  if (books.length === 0) {
    setBooks([]);
  }

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
          />
        ))}
      </ul>
    </div>
  );
}
