import styled from '@emotion/styled';
import SquareIconButton from '/components/buttons/SquareIconButton';
import { getColor } from '/libs/cssLib';

// FIXME : call api for getting user selected buttons
const userSelectedButtonNames = ['calendar', 'calendar'];

function RootNav() {
  return (
    <Bar>
      {userSelectedButtonNames.map((name, i) => (
        <IconContainer key={i}>
          <SquareIconButton />
        </IconContainer>
      ))}
    </Bar>
  );
}

const Bar = styled.section`
  background-color: ${getColor('bgSub')};
  width: 50px;
  padding-top: 5px;
  align-items: center;
  gap: 5px;
  border-right: solid 1px ${getColor('line')};
`;

const IconContainer = styled.div`
  width: 100%;
  align-items: center;
  padding: 5px 0;
  opacity: 80%;
`;

export default RootNav;
