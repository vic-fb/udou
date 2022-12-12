import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)`
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
     -webkit-appearance: none;
  margin: 0;
}
   input[type=number] {
     -moz-appearance: textfield;
   }
`;
