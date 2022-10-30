import styled from 'styled-components';
import { Collapse as AntdCollapse } from 'antd';

const { Panel } = AntdCollapse;

export const Wrapper = styled.div`
  width: 60%;
  min-height: 60vh;
  padding: 40px 40px 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
`;

export const StyledPanel = styled(Panel)`
  //.ant-collapse-item {
  //  margin: 20px;
  //  border: none;
  //  background-color: white;
  //}
`;

export const ButtonWrapper = styled.div`
  text-align: right;
  `;
