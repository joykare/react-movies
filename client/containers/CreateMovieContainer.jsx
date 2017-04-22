import React, { Component } from 'react';
import CreateMovie from '../components/CreateMovie.jsx';

class CreateMovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleBlur = () => {
    console.log("blur");
  }

  render() {
    return (
      <div>
        <CreateMovie handleBlur={this.handleBlur}/>
      </div>
    );
  }
}

export default CreateMovieContainer;