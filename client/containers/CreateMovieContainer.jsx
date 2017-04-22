import React, { Component } from 'react';
import CreateMovie from '../components/CreateMovie.jsx';

class CreateMovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      movies: []
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleBlur = (event) => {
    event.preventDefault();
    this.setState({
      movie: event.target.value
    })
    console.log('movie', this.state.movie);
  }

  handleClick = (event) => {
    const movieArray = this.state.movies;
    movieArray.push(this.state.movie);
    console.log(movieArray);
  }
  render() {
    return (
      <div>
        <CreateMovie addMovie={this.handleBlur}
          handleClick={this.handleClick}
          movies={this.state.movies}
        />
      </div>
    );
  }
}

export default CreateMovieContainer;