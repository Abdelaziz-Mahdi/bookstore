import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddBook = ({ toAddBook }) => {
  const [book, setBook] = useState({
    id: uuidv4(),
    title: '',
    category: '',
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" onChange={handleChange} />
        </label>
        <label htmlFor="author">
          Author
          <input type="text" name="author" id="author" onChange={handleChange} />
        </label>
        <label htmlFor="category">
          Category
          <select name="category" id="category" onChange={handleChange}>
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
