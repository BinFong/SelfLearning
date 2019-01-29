import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/index';
import AddTodoForm from '../todo/addTodo';

const AddTodo = ({ dispatch }) => {
  return (
    <AddTodoForm
      btnClick={todo => {
        dispatch(addTodo(todo));
      }}
    />
  );
};

export default connect()(AddTodo);
