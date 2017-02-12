import React, { Component, PropTypes } from 'react';


export default function formCreator(Form) {
  class FormWrapper extends Component {
    static propTypes = {
      formData: PropTypes.object,
      onSubmit: PropTypes.func
    }


    constructor(props) {
      super(props);
      this.state = {
        formData: Object.assign({}, props.formData),
        errors: {}
      };
    }


    onSubmit() {
      const data = Object.assign({}, this.state.formData);
      const { onSubmit, validate } = this.props;
      const v = validate ? validate(data) : { valid: true };
      this.setState({ errors: v.errors || {} });
      v.valid && onSubmit(data);
    }


    render() {
      const updater = (name, v) => {
        return (e) => {
          const value = v && v() || e.target.value;
          const formData = Object.assign({}, this.state.formData);
          formData[name] = value;
          this.setState({ formData });
        };
      };

      return (
        <Form {...this.props} formData={this.state.formData}
            errors={this.state.errors}
            updater={updater} onSubmit={::this.onSubmit} />
      );
    }
  }

  return FormWrapper;
}
