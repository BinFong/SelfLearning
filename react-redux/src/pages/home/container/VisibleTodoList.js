import { connect } from 'react-redux';
import TodoList from '../todo/todoList';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const VisibleTodoList = connect(
  mapStateToProps
)(TodoList);

export default VisibleTodoList;
