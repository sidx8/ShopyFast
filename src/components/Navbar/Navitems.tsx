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
      children: [
        {
          label: 'ShopyFast',
          subLabel: 'Android app',
          href: '#',
        },
      
      ],
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
