import { connect } from 'react-redux';
import Dashboard from '../todo/dashboard';

const mapStateToProps = state => {
  return {
    total: state.todoList.length,
    nodone: state.todoList.filter(todo => !todo.completed).length,
    percent:
      (state.todoList.filter(todo => todo.completed).length /
        state.todoList.length) *
      100
  };
};

const VisbleDashboard = connect(mapStateToProps)(Dashboard);

export default VisbleDashboard;
