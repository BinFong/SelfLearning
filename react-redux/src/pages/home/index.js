import React from 'react';
import './home.less';
import VisibleTodoList from './container/VisibleTodoList';
import AddTodo from './container/VisibleAddTodo';
import { Row, Col, Progress, Statistic } from 'antd';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <AddTodo />
        <Row>
          <Col span={12}>
            <Progress />
          </Col>
          <Col span={12}>
            {/* <Statistic></Statistic> */}
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
            />
          </Col>
        </Row>
        <VisibleTodoList />
      </div>
    );
  }
}
