import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store/reducers';
import * as serviceWorker from './serviceWorker';
import './style/index.less';

const middleWare = [Thunk, composeWithDevTools]

// const store = createStore(reducers, composeWithDevTools());
const store = createStore(reducers, middleWare);

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
