import React from 'react';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      value: ''
    };
  }

  handlerConfirm = event => {
    this.setState({
      todoList: [...this.state.todoList, this.state.value],
      value: ''
    });
  };

  handlerValueChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { todoList, value } = this.state;
    return (
      <div>
        <ul>
          {todoList.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <hr />
        <form>
          <label>
            TODO:
            <input value={value} onChange={this.handlerValueChange} />
          </label>
          <button onClick={this.handlerConfirm}>Confirm</button>
        </form>
      </div>
    );
  }
}
