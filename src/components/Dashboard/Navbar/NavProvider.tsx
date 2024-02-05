'use client';

import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';

export const dashboardLinks = [
  {
    href: '/dashboard',
  },
  {
    href: '/dashboard/expenses',
  },
  {
    href: '/dashboard/expenses/add',
  },
  {
    href: '/dashboard/groups',
  },
  {
    href: '/dashboard/profile',
  },
];

const NavProvider = () => {
  const [width, setWidth] = useState<number>(0);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return <MobileNav />;
  }
};

export default NavProvider;
