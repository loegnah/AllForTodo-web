import tw, { styled } from 'twin.macro';
import JobItem from './JobItem';
import { jobData } from '/libs/dev/devJobLibs';

type Props = {
  dayNum: number;
};

function DayBox({ dayNum }: Props) {
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
