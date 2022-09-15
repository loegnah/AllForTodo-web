import styled from '@emotion/styled';
import { getColor } from '/libs/cssLibs';
import { dayNames } from '/libs/days';

type Props = {};

function DayHeadContainer({}: Props) {
  return (
    <Container>
      {dayNames.map((dayName, key) => (
        <Item key={key}>{dayName}</Item>
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 22px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: solid 1px ${getColor('line')};
  font-size: 0.8rem;
  color: ${getColor('fontLight')};
`;

const Item = styled.div`
  padding-left: 6px;
  justify-content: center;
`;

export default DayHeadContainer;
