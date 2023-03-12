import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { getCurrentUser } from 'common/fetch-functions';
import Calendar from '../components/Calendar/Calendar';
import Trackables from '../components/Trackables/Trackables';
import Overview from '../components/Overview/Overview';
import './App.less';
import { Container, Avatar } from './App.style';

const { Header, Content } = Layout;

function App() {
  const [currentUser, setCurrentUser] = useState([]); // TODO User profile
  const [date, setDate] = useState(dayjs());
  const [overview, setOverview] = useState(false);
  console.log(currentUser);

  const showOverview = () => {
    setOverview(true);
  };

  const closeOverview = () => {
    setOverview(false);
  };

  useEffect(() => {
    getCurrentUser()
      .then(setCurrentUser);
  }, []);

  return (
    <div className="App">
      <Layout>
        <Overview overview={overview} onClose={closeOverview} />
        <Header className="app-header">
          <Container>
            <div>
              <span className="logo">UdoU</span>
            </div>
            <Avatar icon={<UserOutlined />} />
          </Container>
        </Header>
        <Content>
          <Container>
            <Trackables date={date} onDateChange={setDate} />
            <Calendar date={date} onChange={setDate} showOverview={showOverview} />
          </Container>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
