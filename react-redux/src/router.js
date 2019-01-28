import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/home';

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Root>
          <Route path="/home" component={Home} />
        </Root>
      </HashRouter>
    );
  }
}
