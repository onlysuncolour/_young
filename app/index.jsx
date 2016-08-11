import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, Link, browserHistory} from 'react-router'
import {urlRouter} from './router.jsx'


const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(urlRouter, app);
