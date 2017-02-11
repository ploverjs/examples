import React, { Component } from 'react';
import ajax from '../util/ajax';
import withFetcher from '../util/withFetcher';
import formCreator from '../util/formCreator';
import BreadCrumb from '../components/BreadCrumb';


class Edit extends Component {
  constructor(props) {
    super(props);
  }


  onSubmit(data) {
    console.log(data);
  }


  render() {
    const { book } = this.props;
    return (
      <div className="container">
        <BreadCrumb />
        <div className="page-header">
          <h1>编辑- {book.name}</h1>
        </div>
        <Form formData={book} onSubmit={::this.onSubmit} />
      </div>
    );
  }
}


const Form = formCreator(({ formData, updater, onSubmit }) => (
  <div className="edit-form form-horizontal">
    <div className="form-group">
      <label className="col-sm-2 control-label">名称：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="name"
            value={formData.name} onChange={updater('name')} />
      </div>
    </div>
    <div className="form-group">
      <label className="col-sm-2 control-label">价格：</label>
      <div className="col-sm-10">
        <input className="form-control" type="text" name="price"
            value={formData.price} onChange={updater('price')} />
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


export default withFetcher(Edit, ({ params }) => {
  return ajax(`/api/books/${params.id}`).then(book => ({ book }));
});
