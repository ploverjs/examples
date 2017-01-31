import React from 'react';
import { Link } from 'react-router';
import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';
import BreadCrumb from '../components/BreadCrumb';


const Show = ({ book }) => (
  <div className="container">
    <BreadCrumb />
    <div className="page-header">
      <h1>
        {book.name}
        <small><Link to={`/books/${book.id}/edit`}>编辑</Link></small>
      </h1>
    </div>
    <div>
      <dl className="dl-horizontal">
        <dt>Price：</dt>
        <dd>{book.price}</dd>
      </dl>
    </div>
  </div>
);


export default withFetcher(Show, ({ params }) => {
  return ajax(`/api/books/${params.id}`).then(book => ({ book }));
});
