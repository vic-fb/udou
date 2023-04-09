import styled from 'styled-components';
import { Avatar as AntdAvatar, Layout } from 'antd';
import { primaryColor } from 'common/config';

const { Header } = Layout;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 25px 40px;

  .ant-layout-content {
    margin-bottom: 40px;
  }
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 25px;

`;

export const Avatar = styled(AntdAvatar)`
  background-color: ${primaryColor};
  padding: 0;
  margin: 0;
  flex-shrink: 0;
`;

export const Logo = styled.span`
  border: 2px solid #599191;
  padding: 3px;
  margin: 5px;
  line-height: 100%;
`;

export const BrandHeader = styled(Header)`
  background-color: #282c34;
  min-height: 50px;
  padding: 0 10px;
  display: flex;
  font-size: calc(20px + 2vmin);
  color: white;
`;
