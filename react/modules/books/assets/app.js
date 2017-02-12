/**
 * @webpack.entry
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import domready from 'domready';

import Index from './pages/Index';
import Show from './pages/Show';
import { New, Edit } from './pages/Form';


import './app.scss';


const App = ({ children }) => (
  <div className="page">
    {children}
  </div>
);

const Routers = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/books" component={Index} />
      <Route path="/books/new" component={New} />
      <Route path="/books/:id" component={Show} />
      <Route path="/books/:id/edit" component={Edit} />
    </Route>
  </Router>
);


domready(() => {
  ReactDom.render(Routers, document.getElementById('app'));
});

