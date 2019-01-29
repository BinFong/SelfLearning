import React from 'react';
import { Form, Input, Button } from 'antd';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handlerChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handlerSubmit = e => {
    this.props.btnClick(this.state.value);
  };

  handlerCancel = e => {
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <Form layout="inline" className="form">
        <Form.Item>
          <Input placeholder="输入待办事项" onChange={this.handlerChange} />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={this.handlerSubmit}
            type="primary"
            value={this.value}
          >
            Add Todo
          </Button>
          <Button onClick={this.handlerCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddTodo;
