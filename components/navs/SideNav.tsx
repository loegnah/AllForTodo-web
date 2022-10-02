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
      {sideNavItems.data?.map(({ kind, isSelected }, i) => (
        <IconSection isSelected={isSelected} key={i}>
          <SquareIconButton />
        </IconSection>
      ))}
    </SideNavLayout>
  );
}

const SideNavLayout = styled.section(({ theme }) => [
  tw`w-12 pt-2 items-center border-r space-y-2`,
  css`
    background-color: ${theme.color.bgSub};
    border-color: ${theme.color.line};
  `,
]);

const IconSection = styled.section<{ isSelected: boolean }>(
  tw`w-full items-center p-1.5 mb-1 last:mb-0 opacity-80 opacity-50 duration-200 ease-out`,
  ({ isSelected }) =>
    isSelected
      ? tw`opacity-100 shadow-inner shadow-slate-300`
      : [
          tw`hover:shadow-2xl hover:bg-slate-200 hover:scale-105 hover:opacity-90`,
          tw`active:shadow-inner active:scale-95`,
        ]
);

export default SideNav;
