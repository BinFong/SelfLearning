import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home';

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/home" component={Home} />
      </HashRouter>
    );
  }
}
