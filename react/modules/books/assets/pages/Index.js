import React from 'react';
import { Link } from 'react-router';

import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';


const Index = ({ books, reload }) => (
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
            <Link to={`/books/${book.id}/edit`} className="btn btn-default">编辑</Link>
            <a className="btn btn-default" onClick={() => tryDelete(book.id, reload)}>删除</a>
          </div>
        </li>
      ))
    }
    </ul>
  </div>
);


function tryDelete(id, reload) {
  if (!window.confirm('确定要删除吗？')) {
    return;
  }

  ajax(`/api/books/${id}`, {
    method: 'DELETE'
  }).then(() => {
    reload();
  });
}


export default withFetcher(Index, () => {
  return ajax('/api/books').then(books => ({ books }));
});

