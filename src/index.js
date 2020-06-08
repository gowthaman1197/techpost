import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/style.css'
import 'popper.js/dist/popper.min.js';
global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));