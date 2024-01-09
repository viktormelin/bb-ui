'use client';

import { cn } from '@/lib/clientUtils';
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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex items-center justify-between p-4 border-t border-neutral-200">
      <Link
        href={dashboardLinks[0].href}
        className={cn(
          'p-3 rounded-lg transition-all',
          isCurrentPage(pathname, dashboardLinks[0].href)
            ? 'text-brand-purple-normal border-b border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <RectangleGroupIcon className="w-6 h6" />
      </Link>
      <Link
        href={dashboardLinks[1].href}
        className={cn(
          'p-3 rounded-lg transition-all',
          isCurrentPage(pathname, dashboardLinks[1].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <BanknotesIcon className="w-6 h6" />
      </Link>
      <Link
        href={dashboardLinks[2].href}
        className={cn(
          'p-3 rounded-lg transition-all bg-brand-purple-normal text-white',
          isCurrentPage(pathname, dashboardLinks[2].href)
            ? 'border border-white'
            : 'hover:text-neutral-400',
        )}
      >
        <PlusCircleIcon className="w-6 h6" />
      </Link>
      <Link
        href={dashboardLinks[3].href}
        className={cn(
          'p-3 rounded-lg transition-all',
          isCurrentPage(pathname, dashboardLinks[3].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <UserGroupIcon className="w-6 h6" />
      </Link>
      <Link
        href={dashboardLinks[4].href}
        className={cn(
          'p-3 rounded-lg transition-all',
          isCurrentPage(pathname, dashboardLinks[4].href)
            ? 'text-brand-purple-normal border border-brand-purple-normal'
            : 'hover:text-brand-purple-normal',
        )}
      >
        <UserIcon className="w-6 h6" />
      </Link>
    </nav>
  );
};

export default MobileNav;
