import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Pagination from "./Components/Pagination";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Pagination />
        <News />
      </div>
    );
  }
}

export default App;
