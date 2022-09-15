import styled from '@emotion/styled';
import DayHeadContainer from './day/DayHeadContainer';
import DayContainer from './day/DayContainer';

function CalendarSection() {
  return (
    <Section>
      <DayHeadContainer />
      <DayContainer />
    </Section>
  );
}

const Section = styled.section`
  flex: 1;
`;

export default CalendarSection;
