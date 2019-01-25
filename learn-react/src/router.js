import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/home';
import Todo from './pages/home/todo';
import Login from './pages/login';

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Root>
          <Route
            path="/home"
            render={() => (
              <Home>
                <Route path="/home/todo" component={Todo} />
              </Home>
            )}
          />
          <Route path="/login" component={Login} />
        </Root>
      </HashRouter>
    );
  }
}
