import styled from '@emotion/styled';
import DayHead from './day/DayHead';
import { getColor } from '/libs/cssLib';
import { range } from 'lodash';
import Day from './day/Day';
import { dayNames } from '/libs/dateLib';
import { useRecoilValue } from 'recoil';
import { jobAtoms, jobSelector } from '../../controllers/jobManager';

type Props = {
  year: number;
  month: number;
};

function CalendarBody({ year, month }: Props) {
  const jobs = useRecoilValue(jobSelector({ year, month }));

  return (
    <CalendarBodyLayout>
      <DayHeadSection>
        {dayNames.map((dayName, key) => (
          <DayHead dayName={dayName} key={key} />
        ))}
      </DayHeadSection>
      <DaySection>
        {range(1, 31).map((day) => (
          <Day day={day} key={day} />
        ))}
      </DaySection>
    </CalendarBodyLayout>
  );
}

const CalendarBodyLayout = styled.section`
  flex: 1;
`;

const DayHeadSection = styled.section`
  height: 22px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: solid 1px ${getColor('line')};
  font-size: 0.8rem;
  color: ${getColor('fontLight')};
`;

const DaySection = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 0.9rem;
  color: ${getColor('font')};
`;

export default CalendarBody;
