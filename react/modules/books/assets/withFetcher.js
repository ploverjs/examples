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
      fetcher(this.props).then(data => {
        this.setState({ data });
      }).catch(e => {
        console.error(e);
      });
    }

    render() {
      const { data } = this.state;
      return (
        data ?
        <Base {...data} {...this.props} /> :
        <div className="loading">正在加载...</div>
      );
    }
  }
  //~ class

  return WithDataComponent;
}

