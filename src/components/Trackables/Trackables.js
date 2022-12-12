import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { getEntries, getTrackables } from 'common/fetch-functions';
import Entry from './components/Entry/Entry';
import AddTrackable from './components/AddTrackable/AddTrackable';
import {
  StyledCollapse, DateBar, Wrapper, Dot,
} from './Trackables.style';

const { Panel } = StyledCollapse;

export default function Trackables({ date }) {
  const [dayEntries, setDayEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [trackables, setTrackables] = useState([]);
  const getTrackableEntry = (id) => dayEntries.find((entry) => id === entry.trackableId);
  const isVisible = ({ active, id }) => active || !!getTrackableEntry(id);

  useEffect(() => {
    getEntries(date)
      .then(setDayEntries);
  }, [date]);

  useEffect(() => {
    getTrackables()
      .then(setTrackables);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <AddTrackable open={open} onClose={onClose} setTrackables={setTrackables} />
      <DateBar>
        {dayjs(date).format('dddd, MMMM D, YYYY')}
      </DateBar>
      <StyledCollapse
        bordered={false}
        defaultActiveKey={[1]}
      >
        {
          trackables.map((trackable) => isVisible(trackable) && (
            <Panel header={trackable.name} key={trackable.id + date} extra={<Dot color={trackable.color} />}>
              <Entry trackable={trackable} entry={getTrackableEntry(trackable.id)} date={date} onSave={getEntries} setDayEntries={setDayEntries} />
            </Panel>
          ))
        }
      </StyledCollapse>
      <Button type="dashed" onClick={showDrawer}>Add trackable</Button>
    </Wrapper>
  );
}
