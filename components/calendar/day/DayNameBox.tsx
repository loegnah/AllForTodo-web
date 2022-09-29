import tw, { styled } from 'twin.macro';
import type { DayName } from '/libs/dateLib';

type Props = {
  dayName: DayName;
};

function DayNameBox({ dayName }: Props) {
  return <DayNameBoxLayout>{dayName}</DayNameBoxLayout>;
}

const DayNameBoxLayout = styled.div(tw`pl-1.5 justify-center opacity-80`);

export default DayNameBox;
