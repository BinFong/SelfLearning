import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
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
