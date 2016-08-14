import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import React from 'react';

// import header from './header/config'
import {Main} from './main'

var urlRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

module.exports = {urlRouter}
