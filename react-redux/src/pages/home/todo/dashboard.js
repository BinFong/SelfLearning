import React from 'react';
import { Card, Row, Col, Progress, Statistic } from 'antd';

export default ({ total, nodone, percent }) => {
  return (
    <div className="dashboard">
      <Card>
        <Row>
          <Col span={6}>
            <Statistic title="所有事项" value={total} />
          </Col>
          <Col span={6}>
            <Statistic title="未办事项" value={nodone} />
          </Col>
          <Col span={12}>
            <div className="progress">
              <Progress percent={percent} status="active" showInfo={false} />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
