import tw, { css, styled } from 'twin.macro';
import SquareIconButton from '/components/buttons/SquareIconButton';
import { useQuery } from '@tanstack/react-query';
import { keySideNavItems } from '../../constants/queryKeys';
import { getSideNavItems } from '../../controllers/sideNavManager';

function SideNav() {
  const sideNavItems = useQuery({
    queryKey: [keySideNavItems],
    queryFn: getSideNavItems,
  });

  return (
    <SideNavLayout>
      {sideNavItems.data?.map((name, i) => (
        <IconSection key={i}>
          <SquareIconButton />
        </IconSection>
      ))}
    </SideNavLayout>
  );
}

const SideNavLayout = styled.section(({ theme }) => [
  tw`w-12 pt-2 items-center border-r`,
  css`
    background-color: ${theme.color.bgSub};
    border-color: ${theme.color.line};
  `,
]);

const IconSection = styled.section(tw`w-full items-center py-2 mb-1 last:mb-0 opacity-80`);

export default SideNav;
