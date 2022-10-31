import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Entry from './Entry';
import {
  StyledCollapse, StyledPanel, Wrapper,
} from './Trackables.style';
import { Dot } from './Dot.style';
import { getEntries } from '../common/fetchFunctions';

export default function Trackables({ date, showDrawer, trackables }) {
  const [dayEntries, setDayEntries] = useState([]);
  const getTrackableEntry = (id) => dayEntries.find((entry) => id === entry.trackable_id);
  const isVisible = ({ active, id }) => active || !!getTrackableEntry(id);

  useEffect(() => {
    getEntries(setDayEntries, date);
  }, [date]);

  return (
    <Wrapper>
      <StyledCollapse
        bordered={false}
        defaultActiveKey={[1]}
      >
        {
          trackables.map((trackable) => isVisible(trackable) && (
            <StyledPanel header={trackable.name} key={trackable.id + date} extra={<Dot color={trackable.color} />}>
              <Entry trackable={trackable} entry={getTrackableEntry(trackable.id)} date={date} onChange={getEntries} setDayEntries={setDayEntries} />
            </StyledPanel>
          ))
        }
      </StyledCollapse>
      <Button type="dashed" onClick={showDrawer}>Add trackable</Button>
    </Wrapper>
  );
}
