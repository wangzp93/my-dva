import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexWzp from './routes/IndexWzp';
import RouterParent from './routes/TestRouter/RouterParent';
import RouterChild1 from './routes/TestRouter/RouterChild1';
import RouterChild2 from './routes/TestRouter/RouterChild2';
import RouterChild3 from './routes/TestRouter/RouterChild3';
import RouterChild4 from './routes/TestRouter/RouterChild4';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/wzp" exact component={IndexWzp} />
        <Route path="/routerParent" exact component={RouterParent} />
        <Route path="/routerChild1" exact component={RouterChild1} />
        <Route path="/routerChild2" exact component={RouterChild2} />
        <Route path="/RouterChild3" exact component={RouterChild3} />
        <Route path="/routerChild4/:userId" exact component={RouterChild4} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
