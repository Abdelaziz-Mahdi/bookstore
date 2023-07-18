import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddBook = ({ toAddBook }) => {
  const [book, setBook] = useState({
    id: uuidv4(),
    title: '',
    category: 'General',
    author: '',
    progress: '0%',
    chapter: 'Introduction',
  });
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBook({ ...book, id: uuidv4() });
    toAddBook(book);
    setBook({
      id: uuidv4(),
      title: '',
      category: 'General',
      author: '',
      progress: '0%',
      chapter: 'Introduction',
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input required type="text" name="title" id="title" value={book.title} onChange={handleChange} />
        </label>
        <label htmlFor="author">
          Author
          <input required type="text" name="author" id="author" value={book.author} onChange={handleChange} />
        </label>
        <label htmlFor="category">
          Category
          <select name="category" id="category" value={book.category} onChange={handleChange}>
            <option value="General">General</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="History">History</option>
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  toAddBook: PropTypes.func.isRequired,
};

export default AddBook;
