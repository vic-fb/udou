import styled from 'styled-components';
import { Avatar as AntdAvatar } from 'antd';
import { primaryColor } from 'common/config';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 25px;
  width: 100%;
`;

export const Avatar = styled(AntdAvatar)`
  background-color: ${primaryColor};
`;
