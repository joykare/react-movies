import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Hey extends Component {
  render() {
    return (
      <div>
        Hey
      </div>
    );
  }
}

ReactDOM.render(<Hey />, document.getElementById("root"));