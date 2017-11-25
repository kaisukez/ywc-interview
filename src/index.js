import React from 'react';
import ReactDOM from 'react-dom';
// import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import MainApp from './App';
import IndividualPageApp from './IndividualPageApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/ywc-interview/ref/:refno" component={ IndividualPageApp } />
      <Route path="/ywc-interview/" component={ MainApp } />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
