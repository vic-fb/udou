import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Entry from './Entry';
import {
  StyledCollapse, StyledPanel, Wrapper,
} from './Trackables.style';
import { userId } from '../../config';

export default function Trackables({ date, showDrawer }) {
  const [dayEntries, setDayEntries] = useState([]);
  const [userTrackables, setUserTrackables] = useState([]);

  const getTrackableEntry = (id) => dayEntries.find((entry) => id === entry.trackable_id);
  const isVisible = ({ active, id }) => active || !!getTrackableEntry(id);

  useEffect(() => {
    fetch(`/entries/${userId}/${date.toISOString().substring(0, 10)}`)
      .then(
        (res) => res.json(),
      )
      .then(
        (json) => setDayEntries(json),
      )
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }, [date]);

  useEffect(() => {
    fetch(`/trackables/${userId}`)
      .then(
        (res) => res.json(),
      )
      .then(
        (json) => setUserTrackables(json),
      )
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }, [date]);

  return (
    <Wrapper>
      <StyledCollapse
        bordered={false}
        defaultActiveKey={[1]}
      >
        {
          userTrackables.map((trackable) => isVisible(trackable) && (
            <StyledPanel header={trackable.name} key={trackable.id}>
              <Entry trackable={trackable} entry={getTrackableEntry(trackable.id)} />
            </StyledPanel>
          ))
        }
      </StyledCollapse>
      <Button type="dashed" onClick={showDrawer}>Add trackable</Button>
    </Wrapper>
  );
}
