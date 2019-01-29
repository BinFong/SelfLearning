import React from 'react';
import { Card } from 'antd';

export default ({ onClick, id, text, completed }) => (
  <Card title={`ID: ${id}`} bordered={false}>
    <p>`${text}`</p>
  </Card>
);
