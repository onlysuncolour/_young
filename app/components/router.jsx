import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import React from 'react';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {Main} from './main'
import about from './about/config'
import login from './login/config'
import wolf from './wolf/config'

var urlRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component = {about.About}>
        <Route path="/about/test" component = {about.Test} />
      </Route>
      <Route path="/Test" component = {about.Test} />
      <Route path="/Users" component = {about.Users} />
      <Route path="/User" component = {about.User} />
      <Route path="/wolf" component = {wolf.Main} />
      <Route path="/room" component = {wolf.Room} />
    </Route>
    <Route path="/login" component={login.Login} />
  </Router>
)

module.exports = {urlRouter}

 // <IndexRoute component={Dashboard} />
