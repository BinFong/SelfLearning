import React from 'react';
// import Todo from './todo';
import { List, Icon, Checkbox, Button } from 'antd';

export default ({ todoList, toggleTodo, deleteTodo }) => (
  <List
    className="list"
    size="large"
    header={
      <h2>
        <Icon type="bars" />
        &nbsp;&nbsp;TO DO LIST
      </h2>
    }
    bordered
    dataSource={todoList}
    renderItem={item => (
      <List.Item
        key={item.id}
        actions={[
          <Button type="danger" size="small" onClick={()=> {deleteTodo(item.id)}}>
            Delete
          </Button>
        ]}
      >
        <Checkbox
          checked={item.completed}
          onClick={() => {
            toggleTodo(item.id);
          }}
        >
          {item.text}
        </Checkbox>
      </List.Item>
    )}
  />
);
