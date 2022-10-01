type ItemKinds = 'calendar';

type SIdeNavItem = {
  kind: ItemKinds;
};

const sideNavItemList: SIdeNavItem[] = [{ kind: 'calendar' }, { kind: 'calendar' }, { kind: 'calendar' }];

const getSideNavItems = () => sideNavItemList;

export { getSideNavItems };
