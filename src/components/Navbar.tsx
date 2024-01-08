'use client';

import { cn } from '@/lib/clientUtils';
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
      {/* <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button> */}
    </nav>
  );
};

export default Navbar;
