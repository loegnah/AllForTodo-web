import styled from '@emotion/styled';
import CalendarHeader from '/components/headers/CalendarHeader';
import CalendarSection from '/components/sections/CalendarSection';

function Calendar() {
  return (
    <CalendarWrapper>
      <CalendarHeader />
      <CalendarSection></CalendarSection>
    </CalendarWrapper>
  );
}

const CalendarWrapper = styled.main`
  flex: 1;
`;

export default Calendar;
