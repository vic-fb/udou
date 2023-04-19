import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import dayjs from 'dayjs';
import Calendar from '../components/calendar/Calendar';
import Trackables from '../components/trackables/Trackables';
import Overview from '../components/overview/Overview';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorView from './components/error-view/ErrorView';
import './App.less';
import {
  Container, Avatar, Logo, BrandHeader, HeaderContainer,
} from './App.style';

const { Content } = Layout;

function App() {
  const [date, setDate] = useState(dayjs());
  const [overview, setOverview] = useState(false);

  const showOverview = () => setOverview(true);
  const hideOverview = () => setOverview(false);

  return (
    <div>
      <Layout>
        <Overview overview={overview} onClose={hideOverview} />
        <BrandHeader>
          <HeaderContainer>
            <Logo>UdoU</Logo>
            <Avatar icon={<UserOutlined />} />
          </HeaderContainer>
        </BrandHeader>
        <Content>
          <ErrorBoundary fallback={<ErrorView />}>
            <Container>
              <Trackables date={date} onDateChange={setDate} />
              <Calendar date={date} onChange={setDate} showOverview={showOverview} />
            </Container>
          </ErrorBoundary>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
