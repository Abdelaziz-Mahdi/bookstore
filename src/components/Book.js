import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Completed from './Completed';
import UpdateProgress from './UpdateProgress';
import '../styles/Book.css';

const Book = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="bc-white-two row border m-3 p-3">
      <div className="col-sm-5 mb-3 mb-sm-0">
        <div className="book-info">
          <div className="card-subtitle mb-2 text-body-secondary">{category}</div>
          <h2 className="card-title">{title}</h2>
          <div className="card-link c-azure pb-2">{author}</div>
          <div className="book-actions d-flex">
            <button className="ps-0 pe-3 card-link c-azure" type="button">Comments</button>
            <div className="line-btn" />
            <button className="pe-3 ps-3 card-link c-azure" id={id} type="button" onClick={(e) => dispatch(removeBook(e.target.id))}>Remove</button>
            <div className="line-btn" />
            <button className="ps-3 card-link c-azure" type="button">Edit</button>
          </div>
        </div>
      </div>
      <Completed />
      <UpdateProgress />
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
