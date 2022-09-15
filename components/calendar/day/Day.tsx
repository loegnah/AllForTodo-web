import styled from '@emotion/styled';
import { getColor } from '/libs/cssLibs';

type Props = {
  day: number;
};

function Day({ day }: Props) {
  return (
    <Wrapper>
      <span>{day}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 8px;
  border-left: solid 1px ${getColor('line')};
  border-bottom: solid 1px ${getColor('line')};
`;

export default Day;
