import {
  Drawer, DatePicker, Select,
} from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getEntriesByDateRange, getQuantitativeTrackables } from 'common/services';
import Chart from './components/Chart';
import { Wrapper } from './Overview.style';

const { RangePicker } = DatePicker;

export default function Overview({ overview, onClose }) {
  const [options, setOptions] = useState([]);
  const [dateRange, setDateRange] = useState([dayjs().startOf('month'), dayjs().endOf('month')]);
  const [trackableId, setTrackableId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (overview) {
      getQuantitativeTrackables()
        .then((trackables) => setOptions(trackables.map(({ name, id }) => ({ label: name, value: id }))));
    }
  }, [overview]);

  useEffect(() => {
    const [start, end] = dateRange.map((date) => date.format('YYYY-MM-DD'));
    getEntriesByDateRange(trackableId, start, end)
      .then((entries) => {
        const daysDiff = Math.abs(dateRange[0].diff(dateRange[1], 'days')) + 1;
        const dataEntries = [...new Array(daysDiff)].map((item, index) => {
          const name = dateRange[0].add(index, 'day').format('YYYY-MM-DD');
          const foundEntry = entries.find((entry) => dayjs(entry.date).format('YYYY-MM-DD') === name);
          return {
            name: dateRange[0].add(index, 'day').format('MMM D'),
            value: foundEntry ? foundEntry.quantitativeValue : null,
          };
        });
        setData(dataEntries);
      });
  }, [trackableId, dateRange]);

  return (
    <Drawer
      title="Your trackables overview"
      onClose={onClose}
      open={overview}
      width={720}
    >
      <Wrapper>
        <RangePicker value={dateRange} style={{ width: '50%' }} onChange={setDateRange} allowClear={false} />
        <Select options={options} placeholder="Select a trackable" style={{ width: '50%' }} onChange={setTrackableId} />
        {/* // TODO get value as object instead of id so that I can use unit and color for the Chart */}
      </Wrapper>
      {trackableId && <Chart data={data} dateRange={dateRange} />}
    </Drawer>
  );
}
