// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Create Import File
import "./index.scss";

// Home layout
// import Home from "./home/Home";
import Demo from "./page-demo/Demo";

// Element Layout
import Projects from "./blocks/Projects";
// import Team from "./blocks/Team";
import Team from "./blocks/Team.jsx";

import About from "./elements/About";
import Service from "./elements/Service";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/teams`}
            component={Team}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
