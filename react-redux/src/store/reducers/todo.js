import * as actionType from '../actions/actionType';

const defaultTodoList = [
  {
    id: 0,
    text: '阅读三篇技术文章',
    completed: false
  },
  {
    id: 1,
    text: '写下今天的任务计划',
    completed: true
  },
  {
    id: 2,
    text: '修复Bugs',
    completed: false
  }
];

const todo = (state = defaultTodoList, action) => {
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
    case actionType.TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? Object.assign(todo, { completed: !todo.completed }) : todo)
    case actionType.DELETE_TODO:
      return state.map(todo => todo.id !== action.id )
    case actionType.DELETE_TODO_LOADING:
      return {
        state: 'loading'
      }
    case actionType.DELETE_TODO_SUCCESS:
      return {
        state: 'success',
        data: state.map(todo => todo.id !== action.id)
      }
    case actionType.DELETE_TODO_ERROR:
      return {
        state: 'error'
      }
    default:
      return state;
  }
};

export default todo;
