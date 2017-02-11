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
        formData: Object.assign({}, props.formData)
      };
    }


    onSubmit() {
      const data = Object.assign({}, this.state.formData);
      const { onSubmit } = this.props;
      onSubmit(data);
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
        <Form formData={this.state.formData}
            updater={updater} onSubmit={::this.onSubmit} />
      );
    }
  }

  return FormWrapper;
}
