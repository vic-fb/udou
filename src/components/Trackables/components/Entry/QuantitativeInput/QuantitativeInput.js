import {
  Form, Space, Button,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { StyledInput } from './QuantitativeInput.style';

export default function QuantitativeInput({ addEntry, unit }) {
  const submitForm = ({ quantitative_value: value }) => {
    addEntry({ quantitative_value: Number(value) });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        name="quantitative_value"
      >
        <Space>
          <StyledInput type="number" addonAfter={unit} controls={false} />
          <Button type="primary" htmlType="submit">
            <CheckOutlined />
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
