import React, { useState } from 'react';

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
   
    console.log(books);
    return (
        <div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-info">
                                <div className="book-category">{book.category}</div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-author">{book.author}</div>
                                <div className="book-actions">
                                    <button type="button">Comments</button>
                                    <button type="button">Remove</button>
                                    <button type="button">Edit</button>
                                </div>
                            </div>
                            <div className="book-progress">
                                <div className="book-progress-circle">
                                    <div className="book-progress-circle-percentage">{book.progress}</div>
                                </div>
                                <div className="book-progress-status">
                                    <div className="book-progress-status-current">CURRENT CHAPTER</div>
                                    <div className="book-progress-status-chapter">{book.chapter}</div>
                                    <button type="button">UPDATE PROGRESS</button>
                                </div>
                            </div>
                        </div>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}