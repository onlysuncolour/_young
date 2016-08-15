// import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {urlRouter} from './components/router.jsx'

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(urlRouter, app);
