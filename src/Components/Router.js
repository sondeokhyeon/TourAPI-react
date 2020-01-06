import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MAIN from "../Router/main";
import ERROR from "../Router/error";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MAIN} />
      <Route path="error" exact compoent={ERROR} />
      <Redirect from="*" to="error" />
    </Switch>
  </Router>
);
