import CalendarHeader from '/components/calendar/CalendarHeader';
import CalendarBody from '/components/calendar/CalendarBody';
import tw, { styled } from 'twin.macro';

function Calendar() {
  return (
    <CalendarLayout>
      <CalendarHeader year={2022} month={12} />
      <CalendarBody year={2022} month={12} />
    </CalendarLayout>
  );
}

const CalendarLayout = styled.main(tw`flex-1`);

export default Calendar;
