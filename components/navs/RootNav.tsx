import tw, { css, styled } from 'twin.macro';
import SquareIconButton from '/components/buttons/SquareIconButton';

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

const RootNavLayout = styled.section(({ theme }) => [
  tw`w-12 pt-2 items-center border-r`,
  css`
    background-color: ${theme.color.bgSub};
    border-color: ${theme.color.line};
  `,
]);

const IconSection = styled.section(tw`w-full items-center py-2 mb-1 last:mb-0 opacity-80`);

export default RootNav;
