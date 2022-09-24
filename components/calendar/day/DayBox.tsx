import JobContainer from '../job/JobContainer';
import tw, { styled } from 'twin.macro';

type Props = {
  dayNum: number;
};

function DayBox({ dayNum }: Props) {
  return (
    <DayBoxLayout>
      <DateText>{dayNum}</DateText>
      <JobContainer />
    </DayBoxLayout>
  );
}

const DayBoxLayout = styled.div(tw`border-l border-b p-2`);

const DateText = styled.div();

export default DayBox;
