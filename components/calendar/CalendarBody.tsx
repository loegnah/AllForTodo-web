import tw, { css, styled } from 'twin.macro';
import DayNameBox from './day/DayNameBox';
import { range } from 'lodash';
import DayBox from './day/DayBox';
import { dayNames, getLastDate } from '/libs/dateLib';
import { useRecoilValue } from 'recoil';
import { getJobSelectorByFilter } from '/controllers/job/jobFilterMgr';
import type { JobFilter } from '/controllers/job/jobFilterMgr';

type Props = {
  year: number;
  month: number;
  jobFilter: JobFilter;
};

function CalendarBody({ year, month, jobFilter }: Props) {
  const jobsInMonth = useRecoilValue(getJobSelectorByFilter(jobFilter)({ year, month }));

  return (
    <CalendarBodyLayout>
      <DayNameSection>
        {dayNames.map((dayName, key) => (
          <DayNameBox dayName={dayName} key={key} />
        ))}
      </DayNameSection>
      <DaySection>
        {range(1, getLastDate({ year, month }) + 1).map((dayNum) => (
          <DayBox dayNum={dayNum} key={dayNum} jobDatas={jobsInMonth[dayNum - 1]} />
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
