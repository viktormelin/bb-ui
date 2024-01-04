import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../../styles/globals.css';
import ClientProviders from '@/components/ClientProviders';
import Image from 'next/image';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to BillBuddies - Where Group Expenses Meet Simplicity!',
  description:
    'Splitting bills with friends just got easier, fairer, and quicker.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ClientProviders>
          <nav className="fixed w-full top-0 p-4 text-white flex justify-between items-center">
            <Image
              src="/images/billbuddies_banner.png"
              width={200}
              height={100}
              alt="billbuddies"
            />
            <button>
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
            </button>
          </nav>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
