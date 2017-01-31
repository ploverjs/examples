import React from 'react';
import { Link } from 'react-router';


const BreadCrumb = () => (
  <ol className="breadcrumb">
    <li><Link to="/books">&lt;&lt;Books</Link></li>
  </ol>
);


export default BreadCrumb;
