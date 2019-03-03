import React, { Component } from "react";
import HelloWorld from "./components/HelloWorld";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/:movie" component={MovieDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
