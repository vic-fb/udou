import { Space } from 'antd';
import { CrossCircle, CheckCircle, Text } from './BooleanEntry.style';

export function YesEntry() {
  return (
    <Space>
      <CheckCircle />
      <Text>Yes</Text>
    </Space>
  );
}

export function NoEntry() {
  return (
    <Space>
      <CrossCircle />
      <Text>No</Text>
    </Space>
  );
}
