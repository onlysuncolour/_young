import {Router, Route, Link, browserHistory} from 'react-router'
import React from 'react';


import {Main} from './components/main.jsx'
import {App,About,Test,Users,User} from './components/test1.jsx'

var urlRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="main" component={Main}/>
      <Route path="user" component={User} />
    </Route>
    <Route path="/test" component={Test}>
    </Route>
  </Router>
)

module.exports = {urlRouter}
