import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Flights from "../components/Flights";
import Flight from "../components/Flight";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/flights" exact component={Flights} />
      <Route path="/flight/:id" exact component={Flight} />
    </Switch>
  </Router>
);