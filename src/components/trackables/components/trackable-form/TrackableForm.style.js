import { Input, Form } from 'antd';
import styled from 'styled-components';

export const ColorPicker = styled(Input)`
  padding: 0;
  overflow: hidden;
  display: block;
  position: absolute;
  right: -8px;
  top: -8px;
  width: 56px;
  height: 56px !important;
  border: none;
  cursor: pointer;
  
`;

export const ColorPickerWrapper = styled(Form.Item)`
  .ant-form-item-control-input-content {
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: solid 2px #ddd;
    border-radius: 40px;
    max-width: 40px;
  }
`;
