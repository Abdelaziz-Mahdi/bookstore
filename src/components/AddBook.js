import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    item_id: uuidv4(),
    title: '',
    category: 'General',
    author: '',
  });

  // to git the value of the input and set it to the state
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // to assain id to the new stored book in the state
    setBook({ ...book, id: uuidv4() });
    // to add the book to the list
    dispatch(addBook(book));
    // to reset the form after submitting
    setBook({
      item_id: uuidv4(),
      title: '',
      category: 'General',
      author: '',
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

export default AddBook;
