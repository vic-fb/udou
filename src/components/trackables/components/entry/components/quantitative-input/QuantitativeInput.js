import {
  Form, Space, Button,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { StyledInput } from './QuantitativeInput.style';

function QuantitativeInput({ addEntry, unit }) {
  const submitForm = ({ quantitativeValue: value }) => {
    addEntry({ quantitativeValue: Number(value) });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        name="quantitativeValue"
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

export default QuantitativeInput;
