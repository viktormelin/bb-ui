'use client';

import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import useViewport from '@/hooks/useViewport';

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
  const isMobile = useViewport();

  if (isMobile) {
    return <MobileNav />;
  } else {
    return <DesktopNav />;
  }
};

export default NavProvider;
