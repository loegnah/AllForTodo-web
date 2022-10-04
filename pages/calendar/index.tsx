import CalendarHeader from '/components/calendar/CalendarHeader';
import CalendarBody from '/components/calendar/CalendarBody';
import tw, { styled } from 'twin.macro';
import type { JobFilter } from '../../controllers/job/jobFilterMgr';

type Props = {
  jobFilter: any;
};

function Calendar({}: Props) {
  const jobFilter: JobFilter = { jobSelectorKey: 'selector1' };
  return (
    <CalendarLayout>
      <CalendarHeader year={2022} month={12} />
      <CalendarBody year={2022} month={12} jobFilter={jobFilter} />
    </CalendarLayout>
  );
}

const CalendarLayout = styled.main(tw`flex-1`);

export default Calendar;
