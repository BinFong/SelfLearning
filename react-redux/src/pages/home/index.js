import React from 'react';
import './home.less';
import VisibleAddTodo from './container/VisibleAddTodo';
import VisibleDashboard from './container/VisibleDashboard';
import VisibleTodoList from './container/VisibleTodoList';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <VisibleAddTodo />
        <VisibleDashboard />
        <VisibleTodoList />
      </div>
    );
  }
}
