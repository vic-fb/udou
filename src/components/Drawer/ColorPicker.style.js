import { Input } from 'antd';
import styled from 'styled-components';

export const ColorPicker = styled(Input)`
  border: none;
  background-color: transparent;
  
  .ant-input[type='color'] {
    width: 100px;
    height: 100px;
    border: none;
  }
`;
