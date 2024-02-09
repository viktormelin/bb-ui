'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     setScroll(window.scrollY > 50);
  //   });
  // }, []);

  return (
    <nav
      className={cn(
        'fixed w-full top-0 p-4 text-white flex justify-between items-center',
        scroll && 'bg-black/70',
      )}
    >
      <Link href="/">
        <Image
          src="https://viktormellin.dev/cdn-cgi/imagedelivery/3ecvmLCFkS-FijMWb0qFvQ/1917567e-fc9b-4a30-4d06-578910b23800/public"
          width={200}
          height={100}
          alt="billbuddies"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
