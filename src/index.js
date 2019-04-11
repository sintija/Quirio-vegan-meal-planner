import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/scss/ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";

/**
 * Create a browser history object so it can be manipulated by React
 * @type {{createHref, goBack, length, replace, go, action, location, goForward, block, push, listen}}
 */
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
