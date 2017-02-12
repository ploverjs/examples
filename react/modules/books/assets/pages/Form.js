import React from 'react';
import { withRouter } from 'react-router';
import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';
import formCreator from '../util/formCreator';
import BreadCrumb from '../components/BreadCrumb';


let Edit = ({ book, router }) => {
  const onSubmit = (data) => {
    const { id } = book;
    ajax(`/api/books/${id}`, {
      method: 'PUT',
      data: data
    }).then(o => {
      if (o.success) {
        router.push('/books');
      }
    });
  };

  return (
    <div className="container">
      <BreadCrumb />
      <div className="page-header">
        <h1>编辑- {book.name}</h1>
      </div>
      <Form formData={book} validate={validate} onSubmit={onSubmit} />
    </div>
  );
};


Edit = withFetcher(withRouter(Edit), ({ params }) => {
  return ajax(`/api/books/${params.id}`).then(book => ({ book }));
});


let New = ({ router }) => {
  const onSubmit = (data) => {
    ajax('/api/books', {
      method: 'POST',
      data: data
    }).then(o => {
      if (o.success) {
        router.push(`/books/${o.book.id}`);
      }
    });
  };

  const book = { name: '我是一本书', price: 0 };
  return (
    <div className="container">
      <BreadCrumb />
      <div className="page-header">
        <h1>新建</h1>
      </div>
      <Form formData={book} validate={validate} onSubmit={onSubmit} />
    </div>
  );
};

New = withRouter(New);

export { New, Edit };


// private

const validate = (data) => {
  const errors = {};
  const name = data.name.trim();
  const price = parseFloat(data.price);
  if (!name) {
    errors.name = '请输入名称';
  }
  if (Number.isNaN(price)) {
    errors.price = '请正确输入价格';
  }
  const valid = Object.keys(errors).length === 0;
  return { valid, errors };
};


const Form = formCreator(({ formData, errors, updater, onSubmit }) => (
  <div className="edit-form form-horizontal">
    <div className="form-group">
      <label className="col-sm-2 control-label">名称：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="name"
            value={formData.name} onChange={updater('name')} />
        <Error message={errors.name} />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">价格：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="price"
            value={formData.price} onChange={updater('price')} />
        <Error message={errors.price} />
      </div>
    </div>
    <div className="form-group align-center">
      <div className="col-sm-2"></div>
      <div className="col-sm-10">
        <input className="btn btn-primary" type="submit" value="保存" onClick={onSubmit} />
      </div>
    </div>
  </div>
));


const Error = ({ message }) => {
  if (message) {
    return <div className="alert alert-danger" role="alert">{message}</div>;
  }
  return null;
};
