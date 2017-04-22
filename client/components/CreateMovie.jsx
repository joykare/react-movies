import React from 'react';

const CreateMovie = () => {
  return (
    <div>
      <div className="text-lg-center">
      <h1>Movie App</h1>
      <p>App to list movies</p>
    </div>
    <div className="input-group col-lg-4 offset-lg-4">
      <input type="text" placeholder="enter movie name"/>
      <div className="input-group-btn">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
    </div>
  );
};

export default CreateMovie;