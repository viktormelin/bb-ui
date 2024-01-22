import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../../styles/globals.css';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';

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
      <body className={openSans.className}>
        <ClientProviders>
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
