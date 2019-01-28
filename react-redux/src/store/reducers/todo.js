import * as actionType from '../actions/actionType';

const todo = (state = [], action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todo