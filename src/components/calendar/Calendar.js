import { Button } from 'antd';
import { Wrapper, StyledCalendar } from './Calendar.style';

function Calendar({ date, onChange, showOverview }) {
  return (
    <Wrapper>
      <StyledCalendar fullscreen={false} value={date} onChange={onChange} />
      <Button onClick={showOverview} type="primary">See overview</Button>
    </Wrapper>
  );
}

export default Calendar;
