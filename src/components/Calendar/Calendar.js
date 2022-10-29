import { Wrapper, StyledCalendar } from './Calendar.style';

function Calendar({ date, onChange }) {
  return (
    <Wrapper>
      <StyledCalendar fullscreen={false} value={date} onChange={onChange} />
    </Wrapper>
  );
}

export default Calendar;
