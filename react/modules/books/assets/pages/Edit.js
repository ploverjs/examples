import React, { Component } from 'react';
import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';
import formCreator from '../util/formCreator';
import BreadCrumb from '../components/BreadCrumb';


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }


  onSubmit(data) {
    const errors = {};
    const name = data.name.trim();
    const price = parseFloat(data.price);
    if (!name) {
      errors.name = '请输入名称';
    }
    if (Number.isNaN(price)) {
      errors.price = '请正确输入价格';
    }

    this.setState({ errors });
  }


  render() {
    const { book } = this.props;
    const { errors } = this.state;
    return (
      <div className="container">
        <BreadCrumb />
        <div className="page-header">
          <h1>编辑- {book.name}</h1>
        </div>
        <Form formData={book} errors={errors} onSubmit={::this.onSubmit} />
      </div>
    );
  }
}


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


export default withFetcher(Edit, ({ params }) => {
  return ajax(`/api/books/${params.id}`).then(book => ({ book }));
});
