import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexWzp from './routes/IndexWzp';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/wzp" exact component={IndexWzp} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
