import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: lightgrey;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  position: relative;
`;

export const CaretLeft = styled(CaretLeftOutlined)`
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  left: 10px;
  padding: 25px;
  font-size: 1.2em;
  text-align: left;
`;

export const CaretRight = styled(CaretRightOutlined)`
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  right: 10px;
  font-size: 1.2em;
  padding: 25px;
  text-align: right;
`;
