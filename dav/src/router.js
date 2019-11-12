import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import indexPage from "./view/indexPage"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={indexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
