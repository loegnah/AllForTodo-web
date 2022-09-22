import styled from '@emotion/styled';
import CalendarHeader from '/components/calendar/CalendarHeader';
import CalendarBody from '/components/calendar/CalendarBody';
import { getColor } from '/libs/cssLib';

function Calendar() {
  return (
    <Wrapper>
      <CalendarHeader />
      <CalendarBody year={2022} month={12} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  flex: 1;
  background-color: ${getColor('bg')};
`;

export default Calendar;
