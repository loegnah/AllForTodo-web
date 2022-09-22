import styled from '@emotion/styled';
import { getColor } from '/libs/cssLib';
import JobContainer from '../job/JobContainer';

type Props = {
  day: number;
};

function Day({ day }: Props) {
  return (
    <DayLayout>
      <DateText>{day}</DateText>
      <JobContainer />
    </DayLayout>
  );
}

const DayLayout = styled.div`
  padding: 8px;
  border-left: solid 1px ${getColor('line')};
  border-bottom: solid 1px ${getColor('line')};
`;

const DateText = styled.div``;

export default Day;
