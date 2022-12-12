import { Radio, Form } from 'antd';

export default function BooleanInput({ addEntry }) {
  return (
    <Form onValuesChange={addEntry}>
      <Form.Item name="booleanValue" required>
        <Radio.Group>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
}
