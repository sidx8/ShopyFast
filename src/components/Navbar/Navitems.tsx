interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
export const  NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      href:'/'  
    },
    {
      label: "Products",
      // children: [
      //   {
      //     label: 'Job Board',
      //     subLabel: 'Find your dream design job',
      //     href: '#',
      //   },
      //   {
      //     label: 'Freelance Projects',
      //     subLabel: 'An exclusive list for contract work',
      //     href: '#',
      //   },
      // ],
    },
    {
      label: "Pricing",
      href: "#",
    },
    {
      label: "About Us",
      href: "#",
    },
  ];
  
  export default NavItem;
