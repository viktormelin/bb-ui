'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dashboardLinks } from './NavProvider';
import { RectangleGroupIcon } from '@heroicons/react/24/solid';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';

const isCurrentPage = (pathname: string, target: string) => {
  const paths = pathname.split('/');
  const targets = target.split('/');

  const lastPath = paths[paths.length - 1];
  const lastTarget = targets[targets.length - 1];

  if (lastPath === lastTarget) return true;
  return false;
};

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 items-center p-4 bg-white border-r border-neutral-200">
      <Link
        href={dashboardLinks[2].href}
        className={cn(
          'w-full p-3 rounded-lg transition-all flex gap-2 bg-brand-purple-normal text-white',
          isCurrentPage(pathname, dashboardLinks[2].href)
            ? 'border border-white'
            : 'hover:text-neutral-400',
        )}
      >
        <PlusCircleIcon className="w-6 h6" />
        Quick add
      </Link>
      <Link
        href={dashboardLinks[0].href}
        className={cn(
          'w-full p-3 rounded-lg transition-all flex gap-2',
          isCurrentPage(pathname, dashboardLinks[0].href)
            ? 'text-brand-purple-normal border-b border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <RectangleGroupIcon className="w-6 h6" />
        Dashboard
      </Link>
      <Link
        href={dashboardLinks[1].href}
        className={cn(
          'w-full p-3 rounded-lg transition-all flex gap-2',
          isCurrentPage(pathname, dashboardLinks[1].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <BanknotesIcon className="w-6 h6" />
        My Expenses
      </Link>
      <Link
        href={dashboardLinks[3].href}
        className={cn(
          'w-full p-3 rounded-lg transition-all flex gap-2',
          isCurrentPage(pathname, dashboardLinks[3].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <UserGroupIcon className="w-6 h6" />
        My groups
      </Link>
      <Link
        href={dashboardLinks[4].href}
        className={cn(
          'w-full p-3 rounded-lg transition-all flex gap-2',
          isCurrentPage(pathname, dashboardLinks[4].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <UserIcon className="w-6 h6" />
        Profile
      </Link>
    </nav>
  );
};

export default DesktopNav;
