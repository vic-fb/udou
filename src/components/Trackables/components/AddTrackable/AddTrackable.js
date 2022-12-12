import {
  Button, Drawer as AntDrawer, Form, Input, message, Select,
} from 'antd';
import { useState } from 'react';
import { getTrackables, addTrackable } from 'common/fetch-functions';
import { userId } from 'config';
import { ColorPicker, ColorPickerWrapper } from './AddTrackable.style';

const { Option } = Select;

function AddTrackable({ onClose, open, setTrackables }) {
  const [quantitative, setQuantitative] = useState(false);

  const toggleQuantitative = (value) => (value === 'quantitative' ? setQuantitative(true) : setQuantitative(false));
  const [form] = Form.useForm();

  const submitForm = (values) => {
    const newTrackable = values;
    newTrackable.userId = userId;
    newTrackable.active = 1;
    form.validateFields()
      .then(() => {
        addTrackable(newTrackable)
          .then(() => {
            getTrackables(setTrackables);
            return message.success('Trackable created!');
          })
          .catch(() => message.error('An error happened'));
        onClose();
        form.resetFields();
      });
  };

  return (
    <AntDrawer
      title="Create a new trackable"
      width={720}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form form={form} layout="vertical" onFinish={submitForm} initialValues={{ color: '#599191' }}>
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
          <Select placeholder="Please select an option" onChange={toggleQuantitative}>
            <Option value="boolean">I would like to answer yes or no</Option>
            <Option value="quantitative">I would like to add a measurement</Option>
            <Option value="rating">I would like to rate it</Option>
          </Select>
        </Form.Item>
        { quantitative ? (
          <Form.Item
            name="unit"
            label="What's the unit of measurement?"
            rules={[{ required: true, message: 'Please add a unit to your measurement. Some examples are: cm, kg, hours, liters, times, cups.' }]}
          >
            <Input type="text" />
          </Form.Item>
        ) : '' }
        <ColorPickerWrapper
          name="color"
          label="Pick a color"
          rules={[{ required: true }]}
        >
          <ColorPicker type="color" />
        </ColorPickerWrapper>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </AntDrawer>
  );
}

export default AddTrackable;
