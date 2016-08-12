import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import React from 'react';

import header from './header/config'

var urlRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={header.App}>
      <IndexRoute component={header.Main}>
        <IndexRoute component={header.User} />
      </IndexRoute>
      <Route path="about" component={header.About}/>
      <Route path="main" component={header.Main}/>
      <Route path="user" component={header.User} />
    </Route>
    <Route path="/test" component={header.Test}>
    </Route>
  </Router>
)

module.exports = {urlRouter}
