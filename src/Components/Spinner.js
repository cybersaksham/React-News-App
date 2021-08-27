import React, { Component } from "react";
import loader from "./loader.gif";

export class Spinner extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={loader} alt="" />
      </div>
    );
  }
}

export default Spinner;
