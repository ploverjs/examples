import React from 'react';
import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';
import BreadCrumb from '../components/BreadCrumb';


const Edit = ({ book }) => (
  <div className="container">
    <BreadCrumb />
    <div className="page-header">
      <h1>编辑- {book.name}</h1>
    </div>
    <Form book={book} />
  </div>
);


const Form = ({ book }) => (
  <div className="edit-form form-horizontal">
    <div className="form-group">
      <label className="col-sm-2 control-label">名称：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="name" value={book.name} />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">价格：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="price" value={book.price} />
      </div>
    </div>
    <div className="form-group align-center">
      <div className="col-sm-2"></div>
      <div className="col-sm-10">
        <input className="btn btn-primary" type="submit" value="保存" />
      </div>
    </div>
  </div>
);


export default withFetcher(Edit, ({ params }) => {
  return ajax(`/api/books/${params.id}`).then(book => ({ book }));
});
