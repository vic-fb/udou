import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import DateBar from './DateBar';

describe('Trackables - <DateBar>', () => {
  it('displays the formatted supplied date', () => {
    render(<DateBar date={dayjs('2023-01-13')} />);
    expect(screen.getByText('Friday, January 13, 2023')).toBeInTheDocument();
  });

  it('adds one day to the supplied date', () => {
    const onChange = jest.fn();
    render(<DateBar date={dayjs('2023-01-13')} onChange={onChange} />);
    const nextIcon = screen.getByLabelText('caret-right');
    userEvent.click(nextIcon);
    expect(onChange).toHaveBeenCalledWith(dayjs('2023-01-14'));
  });

  it('subtracts one day to the supplied date', () => {
    const onChange = jest.fn();
    render(<DateBar date={dayjs('2023-01-13')} onChange={onChange} />);
    const nextIcon = screen.getByLabelText('caret-left');
    userEvent.click(nextIcon);
    expect(onChange).toHaveBeenCalledWith(dayjs('2023-01-12'));
  });
});
