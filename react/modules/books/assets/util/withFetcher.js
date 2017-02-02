import React, { Component } from 'react';


export default function withFetcher(Base, fetcher) {
  class WithDataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }


    componentDidMount() {
      this.reload();
    }


    reload(props) {
      props = Object.assign({}, this.props, props);
      fetcher(props).then(data => {
        this.setState({ data });
      });
    }


    render() {
      const { data } = this.state;
      return (
        data ?
        <Base {...data} {...this.props} reload={this.reload.bind(this)} /> :
        <div className="loading">正在加载...</div>
      );
    }
  }
  //~ class

  return WithDataComponent;
}

