import React, { Component } from "react";
import Bulb from "./Bulb.js";
import "./Box.css";
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offOn: "off",
      color: "white",
    };
  }
  toggle = () => {
    this.state.offOn === "on"
      ? this.setState({ offOn: "off", color: "white" })
      : this.setState({ offOn: "on", color: "hsl(60, 100%, 50%)" });
  };

  render() {
    return (
      <>
        <div id="box-bulb">
          <Bulb color={this.state.color} />
          <div id="box" onClick={this.toggle}>
            {this.state.offOn}
          </div>
        </div>
      </>
    );
  }
}
export default Box;
