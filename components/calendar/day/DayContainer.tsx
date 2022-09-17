import styled from '@emotion/styled';
import { getColor } from '/libs/cssLib';
import { range } from 'lodash';
import DayItem from './DayItem';

type Props = {};

function DayContainer({}: Props) {
  return (
    <Container>
      {range(1, 31).map((day) => (
        <DayItem day={day} key={day} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 0.9rem;
  color: ${getColor('font')};
`;

export default DayContainer;
