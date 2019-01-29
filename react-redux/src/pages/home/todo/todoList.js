import React from 'react';
// import Todo from './todo';
import { List } from 'antd';

export default ({ todoList, onTodoClick }) => (
  <List
    className="list"
    size="large"
    header={<h2>TO DO LIST</h2>}
    bordered
    dataSource={todoList}
    renderItem={item => (
      <List.Item key={item.id}>
        {item.text}
      </List.Item>
    )}
  />
);
