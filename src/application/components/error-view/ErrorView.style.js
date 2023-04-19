import styled from 'styled-components';
import { Typography } from 'antd';

export const Container = styled.div`
  max-width: 900px;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 100px 0;
  flex-shrink: 1;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 230px;
  margin-bottom: 75px;
`;

export const ErrorMessage = styled(Typography.Text)`
  text-align: center;
  font-size: x-large;
`;
