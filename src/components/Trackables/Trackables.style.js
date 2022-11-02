import styled from 'styled-components';
import { Collapse as AntdCollapse } from 'antd';

export const Wrapper = styled.div`
  min-height: 60vh;
  padding: 25px 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 900px) {
    padding: 40px 40px 0 0;
    width: 60%;
}
`;

export const StyledCollapse = styled(AntdCollapse)`
  .ant-collapse-item {
    margin: 20px;
    border: none;
    background-color: white;
    border-radius: 10px;
  }
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const DateBar = styled.div`
  background-color: lightgrey;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  `;
