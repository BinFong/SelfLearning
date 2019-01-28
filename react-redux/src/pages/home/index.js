import React from 'react';
import './home.less';
import VisibleTodoList from './container/VisibleTodoList'
import AddTodo from './container/AddTodo'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <VisibleTodoList />
        <AddTodo />
      </div>
    );
  }
}
