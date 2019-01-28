import React, { Component } from 'react';
import './style/base.less';

class Root extends Component {
  render() {
    return (
      <main className="Root">
        {this.props.children}
      </main>
    );
  }
}

export default Root;
