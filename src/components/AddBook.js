import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    item_id: uuidv4(),
    title: '',
    category: 'Select Category',
    author: '',
  });

  // to git the value of the input and set it to the state
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  // to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.category === 'Select Category') return;
    // to assain id to the new stored book in the state
    setBook({ ...book, id: uuidv4() });
    // to add the book to the list
    dispatch(addBook(book));
    // to reset the form after submitting
    setBook({
      item_id: uuidv4(),
      title: '',
      category: 'Select Category',
      author: '',
    });
  };
  return (
    <div className="container p-3">
      <form className="t-border pt-3 text-center" onSubmit={handleSubmit}>
        <h5 className="text-body-secondary">Add New Book</h5>
        <label htmlFor="title" className="col-md-4 col-12 me-2 pb-2">
          <input required className="form-control" placeholder="Book title" aria-label="Book title" type="text" name="title" id="title" value={book.title} onChange={handleChange} />
        </label>
        <label htmlFor="author" className="col-md-3 col-12 m-md-2 pb-2">
          <input required className="form-control" placeholder="Author name" aria-label="Author name" type="text" name="author" id="author" value={book.author} onChange={handleChange} />
        </label>
        <label htmlFor="category" className="col-md-4 col-12 ms-md-2 text-center pb-2">
          <select className="col-6 col-md-5" name="category" placeholder="Author name" id="category" value={book.category} onChange={handleChange}>
            <option value="Select Category" disabled defaultValue>Category</option>
            <option value="General">General</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="History">History</option>
          </select>
          <button className="c-white-two bc-azure ms-4 ms-md-1 col-5" type="submit">ADD BOOK</button>
        </label>
      </form>
    </div>
  );
};

export default AddBook;
