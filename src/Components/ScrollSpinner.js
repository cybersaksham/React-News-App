import React, { Component } from "react";
import scroll_loader from "./scroll_loader.gif";

export class ScrollSpinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={scroll_loader} alt="" />
      </div>
    );
  }
}

export default ScrollSpinner;
