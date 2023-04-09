import styled from 'styled-components';
import { DatePicker, Select as AntSelect } from 'antd';

const { RangePicker } = DatePicker;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  @media (min-width: 1030px) {
    flex-direction: row;
  }
`;

export const DateRangePicker = styled(RangePicker)`
  width: 60%;
  min-width: 250px;
  @media (min-width: 1030px) {
    width: 50%;
    min-width: 235px;
  }
`;

export const Select = styled(AntSelect)`
  width: 60%;
  min-width: 250px;
  @media (min-width: 1030px) {
    width: 50%;
    min-width: 210px;
  }
`;
