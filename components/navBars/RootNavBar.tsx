import styled from '@emotion/styled';
import SquareIconButton from '/components/buttons/SquareIconButton';

// FIXME : call api for getting user selected buttons
const userSelectedButtonNames = ['calendar', 'calendar'];

function RootNavBar() {
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
  background-color: rosybrown;
  width: 60px;
  padding-top: 5px;
  align-items: center;
  gap: 5px;
`;

const IconContainer = styled.div`
  width: 100%;
  align-items: center;
  padding: 5px 0;
`;

export default RootNavBar;
