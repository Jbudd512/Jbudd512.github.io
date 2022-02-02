import React, { Component } from "react";
import "./Button.css";
import Box from "./Box.js";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightBulbs: [],
    };
  }
  addMore = () => {
    let array = [...this.state.lightBulbs, <Box />];
    this.setState({ lightBulbs: array });
  };
  removeLess = () => {
    let array = [...this.state.lightBulbs];
    array.pop();
    this.setState({ lightBulbs: array });
  };

  render() {
    return (
      <div>
        <div id="button-button">
          <button id="button-button-individual" onClick={this.addMore}>
            Add
          </button>
          <button id="button-button-individual" onClick={this.removeLess}>
            Remove
          </button>
        </div>
        <div id="button-button">{this.state.lightBulbs}</div>
      </div>
    );
  }
}

export default Button;
