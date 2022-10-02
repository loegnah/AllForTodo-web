type ItemKinds = 'calendar';

type SIdeNavItem = {
  kind: ItemKinds;
  isSelected: boolean;
};

const sideNavItemList: SIdeNavItem[] = [
  { kind: 'calendar', isSelected: true },
  { kind: 'calendar', isSelected: false },
  { kind: 'calendar', isSelected: false },
];

const getSideNavItems = () => sideNavItemList;

export { getSideNavItems };
