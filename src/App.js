import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={10} />
      </div>
    );
  }
}

export default App;
