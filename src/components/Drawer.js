import {
  Button, Drawer as AntDrawer, Form, Input, Select,
} from 'antd';
import { ColorPicker } from './ColorPicker.style.js';
import { userId } from '../config';

const { Option } = Select;

function Drawer({ onClose, open }) {
  function addTrackable(newTrackable) {
    fetch('/trackables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrackable),
    })
      .then(
        (res) => res.json(),
      )
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      }, []);
  }

  const submitForm = (values) => {
    const newTrackable = values;
    newTrackable.user_id = userId;
    newTrackable.active = 1;
    addTrackable(newTrackable);
    console.log(newTrackable);
  };

  return (
    <AntDrawer
      title="Create a new trackable"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form layout="vertical" onFinish={submitForm} initialValues={{ color: '#ff9922' }}>
        <Form.Item
          name="name"
          label="What would you like to track?"
          rules={[{ required: true, message: 'Please enter a trackable name' }]}
        >
          <Input placeholder="Please enter a name for your trackable" />
        </Form.Item>
        <Form.Item
          name="type"
          label="How would you like to track it?"
          rules={[{ required: true, message: 'Please select an option' }]}
        >
          <Select placeholder="Please select an option">
            <Option value="boolean">I would like to answer yes or no</Option>
            <Option value="quantitative">I would like to add a measurement</Option>
            <Option value="rating">I would like to rate it</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="unit"
          label="What's the unit of measurement?"
          rules={[{ required: true }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="color"
          label="Pick a color"
          rules={[{ required: true }]}
        >
          <ColorPicker type="color" />
        </Form.Item>
        <Button onClick={onClose} type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </AntDrawer>
  );
}

export default Drawer;
