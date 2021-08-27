import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export class App extends Component {
  getNewsComponent = (cat) => (
    <News pageSize={10} country={"in"} category={cat} />
  );

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {this.getNewsComponent("general")}
          </Route>
          <Route exact path="/business">
            {this.getNewsComponent("business")}
          </Route>
          <Route exact path="/entertainment">
            {this.getNewsComponent("entertainment")}
          </Route>
          <Route exact path="/health">
            {this.getNewsComponent("health")}
          </Route>
          <Route exact path="/science">
            {this.getNewsComponent("science")}
          </Route>
          <Route exact path="/sports">
            {this.getNewsComponent("sports")}
          </Route>
          <Route exact path="/technology">
            {this.getNewsComponent("technology")}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
