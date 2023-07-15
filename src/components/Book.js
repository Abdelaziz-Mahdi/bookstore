import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({
  category, title, author, progress, chapter, id,
}) => {
  const [remove, setRemove] = useState(false);

  const removeBook = (e) => {
    setRemove(true);
    // updateBooks(remove, e);
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.id, remove);
  };

  return (
    <li id={id}>
      <div className="book">
        <div className="book-info">
          <div className="book-category">{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
          <div className="book-actions">
            <button type="button">Comments</button>
            <button type="button" onClick={removeBook}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <div className="book-progress-circle">
            <div className="book-progress-circle-percentage">{progress}</div>
          </div>
          <div className="book-progress-status">
            <div className="book-progress-status-current">CURRENT CHAPTER</div>
            <div className="book-progress-status-chapter">{chapter}</div>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
      <br />
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
