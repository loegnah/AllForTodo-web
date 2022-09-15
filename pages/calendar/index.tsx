import styled from '@emotion/styled';
import CalendarHeader from '/components/calendar/CalendarHeader';
import CalendarSection from '/components/calendar/CalendarSection';
import { getColor } from '/libs/cssLibs';

function Calendar() {
  return (
    <Wrapper>
      <CalendarHeader />
      <CalendarSection />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  flex: 1;
  background-color: ${getColor('bg')};
`;

export default Calendar;
