import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import HOME from "../Components/Home";
import Spot from "../Components/Spot";
import Festival from "../Components/Festival";
import Course from "../Components/Course";
import Eatery from "../Components/Eatery";
import ACC from "../Components/Accommodations";
import ERROR from "../Common/Error";
import Header from "../Common/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/spot" component={Spot} />
      <Route path="/festival" component={Festival} />
      <Route path="/course" component={Course} />
      <Route path="/eatery" component={Eatery} />
      <Route path="/acc" component={ACC} />
      <Route path="/error" exact component={ERROR} />
      <Route path="/" exact component={HOME} />
      <Redirect from="*" to="error" />
    </Switch>
  </Router>
);
