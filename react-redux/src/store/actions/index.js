import * as actionType from './actionType';

let nextId = 0;

export const addTodo = text => ({
  type: actionType.ADD_TODO,
  id: nextId++,
  text
});
