import React, { Component } from 'react';
import ReactDOM from "react-dom";

class componentName extends Component {
  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

ReactDOM.render(<componentName />, document.getElementById("root"));