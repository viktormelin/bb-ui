'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full top-0 p-4 text-white flex justify-between items-center',
        scroll && 'bg-black/70',
      )}
    >
      <Image
        src="/images/billbuddies_banner.png"
        width={200}
        height={100}
        alt="billbuddies"
      />
    </nav>
  );
};

export default Navbar;
