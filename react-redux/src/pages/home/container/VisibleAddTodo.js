import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/index';
import AddTodo from '../todo/addTodo';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    btnClick: value => {
      dispatch(addTodo(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
