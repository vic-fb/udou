import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export function YesEntry() {
  return (
    <Space>
      <CheckCircleOutlined style={{ color: 'lightgrey', fontSize: '20px' }} />
      <p style={{ margin: 0 }}>Yes</p>
    </Space>
  );
}

export function NoEntry() {
  return (
    <Space>
      <CloseCircleOutlined style={{ color: 'lightgrey', fontSize: '20px' }} />
      <p style={{ margin: 0 }}>No</p>
    </Space>
  );
}
