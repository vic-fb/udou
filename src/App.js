import { useState, useEffect } from 'react';
import { Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { userId } from './config';
import Container from './components/common/Container.style';
import Calendar from './components/Calendar/Calendar';
import Trackables from './components/Trackables/Trackables';
import Drawer from './components/Drawer';
import './App.less';

const { Header, Content } = Layout;

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [date, setDate] = useState(dayjs());
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then(
        (res) => res.json(),
      )
      .then(
        (json) => setCurrentUser(json),
      )
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }, []);

  return (
    <div className="App">
      <Layout>
        <Drawer open={open} onClose={onClose} />
        <Header className="app-header">
          <Container>
            <div>
              <span className="logo">UdoU</span>
            </div>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#FFa500' }} />
          </Container>
        </Header>
        <Content>
          <Container>
            <Trackables date={date} onChange={setDate} showDrawer={showDrawer} />
            <Calendar date={date} onChange={setDate} />
          </Container>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
