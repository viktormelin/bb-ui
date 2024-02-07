import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../../styles/globals.css';
import ClientProviders, { AuthProvider } from '@/components/ClientProviders';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

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
    <html lang="en" className="bg-black text-white">
      <body className={cn(openSans.className, 'relative')}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
