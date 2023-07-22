import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="book">
        <div className="book-info">
          <div className="book-category">{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-actions">
            <button type="button">Comments</button>
            <button id={id} type="button" onClick={(e) => dispatch(removeBook(e.target.id))}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
      <br />
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
