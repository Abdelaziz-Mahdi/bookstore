import React from 'react';
import '../styles/UpdateProgress.css';

const UpdateProgress = () => (
  <div className="col-sm-3 mb-3 mb-sm-0 ps-0 ps-sm-1 ps-md-2 ps-lg-5">
    <div className="ps-md-3 ps-lg-1 ps-xl-3">
      <div className="card-body">
        <p className="card-text"><small className="text-body-secondary">Current Chapter</small></p>
        <p className="card-text">Chapter 17</p>
        <button type="button" className="c-white-two bc-azure  ps-4 pe-4">Update progress</button>
      </div>
    </div>
  </div>
);

export default UpdateProgress;
