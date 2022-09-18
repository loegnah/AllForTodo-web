import styled from '@emotion/styled';
import SquareIconButton from '/components/buttons/SquareIconButton';
import { getColor } from '/libs/cssLib';

// FIXME : call api for getting user selected buttons
const userSelectedButtonNames = ['calendar', 'calendar'];

function RootNav() {
  return (
    <RootNavLayout>
      {userSelectedButtonNames.map((name, i) => (
        <IconSection key={i}>
          <SquareIconButton />
        </IconSection>
      ))}
    </RootNavLayout>
  );
}

const RootNavLayout = styled.section`
  background-color: ${getColor('bgSub')};
  width: 50px;
  padding-top: 5px;
  align-items: center;
  gap: 5px;
  border-right: solid 1px ${getColor('line')};
`;

const IconSection = styled.section`
  width: 100%;
  align-items: center;
  padding: 5px 0;
  opacity: 80%;
`;

export default RootNav;
