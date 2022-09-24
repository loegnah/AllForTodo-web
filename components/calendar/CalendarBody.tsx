import tw, { css, styled } from 'twin.macro';
import DayNameBox from './day/DayNameBox';
import { range } from 'lodash';
import DayBox from './day/DayBox';
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
      <DayNameSection>
        {dayNames.map((dayName, key) => (
          <DayNameBox dayName={dayName} key={key} />
        ))}
      </DayNameSection>
      <DaySection>
        {range(1, 31).map((dayNum) => (
          <DayBox dayNum={dayNum} key={dayNum} />
        ))}
      </DaySection>
    </CalendarBodyLayout>
  );
}

const CalendarBodyLayout = styled.section(tw`flex-1`);

const DayNameSection = styled.section(({ theme }) => [
  tw`h-5 grid grid-cols-7 border-b text-xs`,
  css`
    border-bottom-color: ${theme.color.line};
    color: ${theme.color.fontLight};
  `,
]);

const DaySection = styled.section(({ theme }) => [
  tw`flex-1 grid grid-cols-7 text-sm`,
  css`
    color: ${theme.color.font};
  `,
]);

export default CalendarBody;
