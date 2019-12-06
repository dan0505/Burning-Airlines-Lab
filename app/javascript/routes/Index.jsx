import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Flights from "../components/Flights";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/flights" exact component={Flights} />
    </Switch>
  </Router>
);