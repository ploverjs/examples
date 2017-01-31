/**
 * @webpack.entry
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import domready from 'domready';

import ajax from './ajax';
import withFetcher from './withFetcher';

import Show from './Show';


import './app.scss';


const Books = ({ books }) => (
  <div className="container">
    <h1>Books</h1>
    <a className="new-btn btn btn-primary">添加</a>
    <ul className="books list-group">
    {
      books.map(book => (
        <li key={book.id} className="list-group-item">
          <div className="name">
            <Link to={`/books/${book.id}`}>{book.name}</Link>
          </div>
          <div className="btn-group btn-group-sm">
            <a className="btn btn-default">编辑</a>
            <a className="btn btn-default">删除</a>
          </div>
        </li>
      ))
    }
    </ul>
  </div>
);

const BooksContainer = withFetcher(Books, () => {
  return ajax('/api/books').then(books => ({ books }));
});


const App = ({ children }) => (
  <div className="page">
    {children}
  </div>
);

const Routers = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BooksContainer} />
      <Route path="/books" component={BooksContainer} />
      <Route path="/books/:id" component={Show} />
    </Route>
  </Router>
);


domready(() => {
  ReactDom.render(Routers, document.getElementById('app'));
});

