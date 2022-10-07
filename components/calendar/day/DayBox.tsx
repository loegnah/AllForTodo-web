import tw, { styled } from 'twin.macro';
import JobItem from './JobItem';
import type { JobData } from '/controllers/job/jobCntr';

type Props = {
  dayNum: number;
  jobDatas: JobData[];
};

function DayBox({ dayNum, jobDatas }: Props) {
  if (jobDatas.length) console.log(dayNum, jobDatas);
  return (
    <DayBoxLayout>
      <DateText>{dayNum}</DateText>
      <JobContainer>
        {jobDatas.map((jobData, key) => (
          <JobItem jobData={jobData} key={key} />
        ))}
      </JobContainer>
    </DayBoxLayout>
  );
}

const DayBoxLayout = styled.div(tw`border-l border-b`);

const DateText = styled.div(tw`my-1 ml-2`);

const JobContainer = styled.ul(tw``);

export default DayBox;
