import ClientProviders from '@/components/ClientProviders';
import { validateUser } from '@/lib/authorizer';
import { Open_Sans } from 'next/font/google';
import { redirect } from 'next/navigation';
import '../../../styles/globals.css';
import NavProvider from '@/components/Dashboard/Navbar/NavProvider';
import { cn } from '@/lib/clientUtils';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserValidated = await validateUser();
  if (!isUserValidated) redirect('/authenticate');

  return (
    <html lang="en">
      <body className={cn(openSans.className, 'flex flex-col h-screen')}>
        <ClientProviders>
          <main className="p-4 flex-1 overflow-auto">{children}</main>
          <NavProvider />
        </ClientProviders>
      </body>
    </html>
  );
};

export default DashboardLayout;
