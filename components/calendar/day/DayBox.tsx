import tw, { styled } from 'twin.macro';
import JobItem from './JobItem';
import { jobData } from '/libs/dev/devJobLibs';
import type { JobData } from '../../../controllers/job/jobCntr';

type Props = {
  dayNum: number;
  jobs: JobData[];
};

function DayBox({ dayNum, jobs }: Props) {
  if (jobs.length) console.log(dayNum, jobs);
  return (
    <DayBoxLayout>
      <DateText>{dayNum}</DateText>
      <JobContainer>
        <JobItem job={jobData[0]} isMultiDayJob={dayNum === 4} />
      </JobContainer>
    </DayBoxLayout>
  );
}

const DayBoxLayout = styled.div(tw`border-l border-b`);

const DateText = styled.div(tw`my-1 ml-2`);

const JobContainer = styled.ul(tw``);

export default DayBox;
