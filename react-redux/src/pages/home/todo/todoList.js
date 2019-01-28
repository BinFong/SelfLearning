import React from 'react';
import Todo from './todo';

export default ({ todoList, onTodoClick }) => (
  <ul>
    {todoList.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);
