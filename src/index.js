import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//library for giving the functionality of routing, was added via yarn add react-router-dom
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  //the way this plug is works is by wrapping around the app.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


