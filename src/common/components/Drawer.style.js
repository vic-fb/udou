import { Drawer as AntDrawer } from 'antd';
import styled from 'styled-components';

export const Drawer = styled(AntDrawer)`
  .ant-drawer-content-wrapper {
    width: 100% !important;
    min-width: 295px;
  }
  @media (min-width: 750px) {
    .ant-drawer-content-wrapper {
      width: 50% !important;
      max-width: 700px;
    }
  }
`;
