import styled from '@emotion/styled';
import type { DayName } from '/libs/dateLib';

type Props = {
  dayName: DayName;
};

function DayHead({ dayName }: Props) {
  return <DayHeadLayout>{dayName}</DayHeadLayout>;
}

const DayHeadLayout = styled.div`
  padding-left: 6px;
  justify-content: center;
`;

export default DayHead;
