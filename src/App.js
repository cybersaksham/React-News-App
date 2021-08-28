import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export class App extends Component {
  getNewsComponent = (cat) => (
    <News key={cat} pageSize={9} country={"in"} category={cat} />
  );

  categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  render() {
    return (
      <Router>
        <Navbar categories={this.categories} />
        <Switch>
          <Route exact path="/">
            {this.getNewsComponent("general")}
          </Route>
          {this.categories.map((cat) => (
            <Route key={cat} exact path={`/${cat}`}>
              {this.getNewsComponent(cat)}
            </Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
