import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { Wrapper } from './DateBar.style';

function DateBar({ date, onChange }) {
  return (
    <Wrapper>
      <CaretLeftOutlined onClick={() => onChange(date.subtract(1, 'day'))} />
      {dayjs(date).format('dddd, MMMM D, YYYY')}
      <CaretRightOutlined onClick={() => onChange(date.add(1, 'day'))} />
    </Wrapper>
  );
}

export default DateBar;
