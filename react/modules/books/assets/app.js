/**
 * @webpack.entry
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import domready from 'domready';


import './app.scss';


const fetch = window.fetch;


class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null
    };
  }


  componentDidMount() {
    fetch('/api/books').then(res => res.json())
      .then(books => {
        this.setState({ books });
      }).catch(e => {
        console.error(e);
      });
  }


  render() {
    const { books } = this.state;
    return (
      books ?
      <App books={books} /> :
      <div className="loading" />
    );
  }
}


const App = ({ books }) => (
  <div className="container">
    <h1>Books</h1>
    <a className="new-btn btn btn-primary">添加</a>
    <ul className="books list-group">
    {
      books.map(book => (
        <li key={book.id} className="list-group-item">
          <div className="name">
            <a>{book.name}</a>
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


domready(() => {
  ReactDom.render(<AppContainer />, document.getElementById('app'));
});

