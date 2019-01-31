import { connect } from 'react-redux';
import TodoList from '../todo/todoList';
import { toggleTodo, deleteTodo } from '../../../store/actions/index';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
