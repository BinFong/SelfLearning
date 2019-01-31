import * as actionType from './actionType';

let nextId = 3;

export const addTodo = text => ({
  type: actionType.ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodo = id => ({
  type: actionType.TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: actionType.DELETE_TODO,
  id
});
