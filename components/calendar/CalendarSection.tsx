import styled from '@emotion/styled';
import DayHead from './DayHead';
import { dayNames } from '/libs/days';
import { range } from 'lodash';
import DayItem from './DayItem';

function CalendarSection() {
  return (
    <Wrapper>
      <DayHeadContainer>
        {dayNames.map((dayName) => (
          <DayHead dayName={dayName} />
        ))}
      </DayHeadContainer>
      <DayContainer>
        {range(1, 31).map((day) => (
          <DayItem day={day} />
        ))}
      </DayContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  background-color: #eeeeee;
`;

const DayHeadContainer = styled.div`
  height: 20px;
  background-color: rgba(200, 200, 200, 0.5);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DayContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default CalendarSection;
