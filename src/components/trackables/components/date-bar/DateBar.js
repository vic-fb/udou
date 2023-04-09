import dayjs from 'dayjs';
import { Wrapper, CaretLeft, CaretRight } from './DateBar.style';

function DateBar({ date, onChange }) {
  return (
    <Wrapper>
      <CaretLeft onClick={() => onChange(date.subtract(1, 'day'))} />
      {dayjs(date).format('dddd, MMMM D, YYYY')}
      <CaretRight onClick={() => onChange(date.add(1, 'day'))} />
    </Wrapper>
  );
}

export default DateBar;
