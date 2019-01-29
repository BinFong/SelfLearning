import React from 'react';
import './home.less';
import VisibleTodoList from './container/VisibleTodoList';
import AddTodo from './container/VisibleAddTodo';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
