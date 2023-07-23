import React from 'react';
import '../styles/Completed.css';

const Completed = () => (
  <div className="col-sm-3 mb-3 mb-sm-0 r-border d-flex flex-column justify-content-center">
    <div className="row">
      <div className="col-md-4">
        <div className="progress-bar" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">64%</h5>
          <p className="card-text"><small className="text-body-secondary">Completed</small></p>
        </div>
      </div>
    </div>
  </div>
);

export default Completed;
