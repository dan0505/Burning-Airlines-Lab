import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Flights from "../components/Flights";
import Flight from "../components/Flight";
import NewFlight from "../components/NewFlight";
import Header from '../components/Header';
import User from '../components/User';

export default (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/flights" exact component={Flights} />
      <Route path="/flight/:id" exact component={Flight} />
      <Route path="/flight" exact component={NewFlight} />
      <Route path="/user" exact component={User} />
    </Switch>
  </Router>
);