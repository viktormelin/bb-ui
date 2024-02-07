'use client';

import { authConfig, cn } from '@/lib/utils';
import type { AuthToken } from '@authorizerdev/authorizer-js';
import { AuthorizerProvider } from '@authorizerdev/authorizer-react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import NavProvider from './Dashboard/Navbar/NavProvider';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

const onStateChangeCallback = async ({
  token,
}: {
  token: AuthToken | null;
}) => {
  if (!token) return;

  await fetch('/api/auth/session', {
    method: 'POST',
    body: JSON.stringify(token),
    cache: 'no-store',
  });
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const hasJoinToken = sessionStorage.getItem('join');
    if (hasJoinToken) {
      const inviteUrl = '/join?token=' + hasJoinToken;
      router.push(inviteUrl);
    }
  }, []);

  return (
    <AuthorizerProvider
      config={authConfig}
      onStateChangeCallback={onStateChangeCallback}
    >
      {children}
    </AuthorizerProvider>
  );
};

const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <body
        className={cn(
          'flex h-screen justify-center flex-col md:flex-row',
          openSans.className,
        )}
      >
        <main className="p-4 flex-1 overflow-auto md:order-1 md:w-full md:max-w-2xl">
          {children}
        </main>
        <NavProvider />
      </body>
    </AuthProvider>
  );
};

export default ClientProviders;
