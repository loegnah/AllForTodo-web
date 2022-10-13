import tw, { styled } from 'twin.macro';
import JobItem from './JobItem';
import type Job from '/structures/Job';

type Props = {
  dayNum: number;
  jobDatas: Job[];
};

function DayBox({ dayNum, jobDatas }: Props) {
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
